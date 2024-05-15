// Import necessary actions from slices
import { pushData } from "../../features/telemetry/TelemetrySlice"; // Import the pushData action from the TelemetrySlice
import { setConnected } from "../../features/configs/connectedSlice"; // Import the setConnected action from the connectedSlice

// Define the readData function
// It reads data from the serial port and dispatches it to the redux store
export async function readData(reader, isConnected, port, dispatch) {
  let dataBuffer = []; // Buffer for storing incoming data
  let receivedData; // Variable for storing received data

  // While the port is connected and readable
  while (isConnected && port.readable) {
    try {
      // Continuously read data from the port
      while (true) {
        const { value, done } = await reader.read(); // Read data from the reader

        // If the port is closed, log a message and break the loop
        if (done) {
          console.log("Serial port closed."); // Log that the serial port is closed
          break; // Break the loop as the port is closed
        }

        // Concatenate the received data to the data buffer
        dataBuffer = dataBuffer.concat(Array.from(value));

        // If the data buffer has enough data
        if (dataBuffer.length >= 49) {
          // Iterate over the data buffer
          for (let i = 0; i < dataBuffer.length; i++) {
            // If the data buffer has the correct start and end bytes
            if (i === 0 && dataBuffer[i] === 15 && dataBuffer[48] === 0) {
              // Extract the data from the data buffer
              receivedData = new Uint8Array(dataBuffer.slice(1, 48));
              // Remove the extracted data from the data buffer
              dataBuffer.splice(0, 50);
              // Create a DataView for the received data
              const dataView = new DataView(receivedData.buffer);
              // Extract the data from the DataView
              const packetCount = dataView.getFloat32(0, true);
              const mode = dataView.getUint8(4);
              const state = dataView.getUint8(5);
              const altitude = dataView.getFloat32(6, true);
              const temperature = dataView.getFloat32(10, true);
              const pressure = dataView.getFloat32(14, true);
              const voltage = dataView.getFloat32(18, true);
              const gpsTime = dataView.getFloat32(22, true);
              const gpsLatitude = dataView.getFloat32(26, true);
              const gpsLongitude = dataView.getFloat32(30, true);
              const gpsSats = dataView.getUint8(34);
              const tiltX = dataView.getFloat32(35, true);
              const tiltY = dataView.getFloat32(39, true);
              const rotZ = dataView.getFloat32(43, true);
              // Create an object with the extracted data
              const dataSend = {
                packetCount,
                mode,
                state,
                altitude,
                temperature,
                pressure,
                voltage,
                gpsTime,
                gpsLatitude,
                gpsLongitude,
                gpsSats,
                tiltX,
                tiltY,
                rotZ,
              };
              // Dispatch the data to the redux store
              dispatch(pushData(dataSend));
              // Break the loop as the data has been processed
              break;
            } else {
              // If the data buffer does not have the correct start and end bytes, remove the last byte and decrement the index
              dataBuffer.pop();
              i--;
            }
          }
        }
      }
    } catch (error) {
      // Log any errors that occur while reading data
      console.error("Error reading data:", error);
    }
  }
}

// Define the connect function
// It connects to a serial port and sets up the reader
export async function connect(
  setportFound,
  setPort,
  setReader,
  dispatch,
  baudRate
) {
  try {
    // Indicate that a port has been found
    setportFound(true);
    // Request a port from the browser
    const newPort = await navigator.serial.requestPort();
    // If no port is found, log an error and return
    if (!newPort) {
      console.error("No port found");
      return;
    }
    // Open the port with the specified baud rate
    await newPort.open({ baudRate: baudRate });
    // Set the port and reader in the state
    setPort(newPort);
    setReader(newPort.readable.getReader());
    // Dispatch the connected action to the redux store
    dispatch(setConnected(true));
    // Clear any existing CSV data from the session storage
    sessionStorage.removeItem("csvData");
    // Set the CSV headers in the session storage
    sessionStorage.setItem(
      "csvData",
      "packetCount,mode,state,altitude,temperature,pressure,voltage,gpsTime,gpsLatitude,gpsLongitude,gpsSats,tiltX,tiltY,rotZ\n"
    );
  } catch (err) {
    // Log any errors that occur while connecting
    console.log(err);
    // Indicate that no port has been found
    setportFound(false);
  }
}

// Define the disconnect function
// It disconnects from the serial port and cleans up the reader
export async function disconnect(dispatch, reader, setReader, port, setPort) {
  try {
    // Dispatch the disconnected action to the redux store
    dispatch(setConnected(false));
    // If a reader exists, release its lock and clear it from the state
    if (reader) {
      reader.releaseLock();
      setReader(null);
    }

    // If a port exists, close it and clear it from the state
    if (port) {
      await port.close();
      setPort(null);
    }
  } catch (err) {
    // Alert any errors that occur while disconnecting
    window.alert(err.message);
  }
}

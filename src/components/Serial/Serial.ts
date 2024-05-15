import { pushData } from "../../features/telemetry/TelemetrySlice";
import { setConnected } from "../../features/configs/connectedSlice";

// Function to continuously read data from a serial port and dispatch it to the Redux store
export async function readData(
  reader: ReadableStreamDefaultReader<Uint8Array> | null, // Reader for reading data from the serial port
  isConnected: boolean, // Flag indicating if the port is connected
  port: SerialPort | null, // Reference to the serial port
  dispatch: Function // Function to dispatch data to the Redux store
) {
  let dataBuffer: number[] = []; // Buffer for storing incoming data
  let receivedData: Uint8Array | undefined; // Variable for storing received data

  // Continuously read data while the port is connected and readable
  while (isConnected && port?.readable) {
    try {
      // Read data from the reader
      const { value, done } = await reader!.read();

      // If the port is closed, log a message and break the loop
      if (done) {
        console.log("Serial port closed.");
        break;
      }

      // Concatenate the received data to the data buffer
      dataBuffer = dataBuffer.concat(Array.from(value));

      // If the data buffer has enough data
      if (dataBuffer.length >= 49) {
        for (let i = 0; i < dataBuffer.length; i++) {
          // If the data buffer has the correct start and end bytes
          if (i === 0 && dataBuffer[i] === 15 && dataBuffer[48] === 0) {
            // Extract the data from the data buffer
            receivedData = new Uint8Array(dataBuffer.slice(1, 48));
            dataBuffer.splice(0, 50);

            // Create a DataView for the received data
            const dataView: DataView = new DataView(receivedData.buffer);

            // Extract various data fields from the DataView
            const packetCount: number = dataView.getFloat32(0, true);
            const mode: number = dataView.getUint8(4);
            const state: number = dataView.getUint8(5);
            const altitude: number = dataView.getFloat32(6, true);
            const temperature: number = dataView.getFloat32(10, true);
            const pressure: number = dataView.getFloat32(14, true);
            const voltage: number = dataView.getFloat32(18, true);
            const gpsTime: number = dataView.getFloat32(22, true);
            const gpsLatitude: number = dataView.getFloat32(26, true);
            const gpsLongitude: number = dataView.getFloat32(30, true);
            const gpsSats: number = dataView.getUint8(34);
            const tiltX: number = dataView.getFloat32(35, true);
            const tiltY: number = dataView.getFloat32(39, true);
            const rotZ: number = dataView.getFloat32(43, true);

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

            // Dispatch the data to the Redux store
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
    } catch (error) {
      // Log any errors that occur while reading data
      console.error("Error reading data:", error);
    }
  }
}

// Function to connect to a serial port and set up the reader
export async function connect(
  setportFound: Function, // Function to update the port found status
  setPort: Function, // Function to set the port in the state
  setReader: Function, // Function to set the reader in the state
  dispatch: Function, // Function to dispatch actions to the Redux store
  baudRate: number // Baud rate for serial communication
) {
  try {
    setportFound(true); // Indicate that a port has been found
    const newPort: SerialPort = await navigator.serial.requestPort(); // Request a port from the browser
    if (!newPort) {
      console.error("No port found"); // If no port is found, log an error and return
      return;
    }
    await newPort.open({ baudRate: baudRate }); // Open the port with the specified baud rate
    setPort(newPort); // Set the port in the state
    if (newPort) {
      setReader(newPort.readable?.getReader()); // Set up the reader
    }
    dispatch(setConnected(true)); // Dispatch the connected action to the Redux store
    sessionStorage.removeItem("csvData"); // Clear any existing CSV data from the session storage
    sessionStorage.setItem(
      "csvData",
      "packetCount,mode,state,altitude,temperature,pressure,voltage,gpsTime,gpsLatitude,gpsLongitude,gpsSats,tiltX,tiltY,rotZ\n"
    ); // Set the CSV headers in the session storage
  } catch (err) {
    console.log(err); // Log any errors that occur while connecting
    setportFound(false); // Indicate that no port has been found
  }
}

// Function to disconnect from the serial port and clean up the reader
export async function disconnect(
  dispatch: Function, // Function to dispatch actions to the Redux store
  reader: ReadableStreamDefaultReader<Uint8Array> | null, // Reader for reading data from the serial port
  setReader: Function, // Function to set the reader in the state
  port: SerialPort | null, // Reference to the serial port
  setPort: Function // Function to set the port in the state
) {
  try {
    dispatch(setConnected(false)); // Dispatch the disconnected action to the Redux store
    if (reader) {
      reader.releaseLock(); // Release the lock on the reader
      setReader(null); // Clear the reader from the state
    }

    if (port) {
      await port.close(); // Close the port
      setPort(null); // Clear the port from the state
    }
  } catch (err) {
    console.log(err); // Log any errors that occur while disconnecting
  }
}

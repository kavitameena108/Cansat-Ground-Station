// Import necessary libraries and components
import { useState, useEffect } from "react"; // React library and hooks
import Button from "@mui/material/Button"; // Button component from Material UI
import { useSelector, useDispatch } from "react-redux"; // useDispatch and useSelector hooks from react-redux
import { readData, connect, disconnect } from "../Serial"; // Functions from Serial

// Define the ConnectButton component
const ConnectButton = () => {
  // Check if the serial API is supported
  const serialSupported = "serial" in navigator;

  // Define states for the port, reader, and portFound
  const [port, setPort] = useState(null);
  const [reader, setReader] = useState(null);
  const [portFound, setportFound] = useState(true);

  // Get the connected, baudRate, and launch values from the redux store
  const connected = useSelector((state) => state.connected.value);
  const baudRate = useSelector((state) => state.baudrate.value);
  const launch = useSelector((state) => state.launch.value);

  // Get the dispatch function from react-redux
  const dispatch = useDispatch();

  // Define the handleClick function
  // It connects or disconnects based on the connected state
  const handleClick = async () => {
    if (!connected) {
      await connect(setportFound, setPort, setReader, dispatch, baudRate);
    } else {
      await disconnect(dispatch, reader, setReader, port, setPort);
    }
  };

  // Use the useEffect hook to read data when the connected or port state changes
  useEffect(() => {
    if (reader) {
      readData(reader, connected, port, dispatch);
    }
    return () => {
      if (reader) {
        reader.releaseLock();
      }
    };
  }, [connected, port]);

  // Return the JSX for the ConnectButton component
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !connected ? "green" : "red",
          color: "white",
          border: !portFound ? "2px solid #8B0000" : null,
          "&:hover": {
            backgroundColor: !connected ? "#006400" : "#8B0000",
          },
          "&:disabled": {
            backgroundColor: "red",
            color: "white",
          },
          minWidth: "130px",
        }}
        onClick={handleClick}
        disabled={!serialSupported || launch}
      >
        {connected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};

// Export the ConnectButton component as the default export
export default ConnectButton;

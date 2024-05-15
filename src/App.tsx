//This is the App component that renders different components like Navbar, Airspeed ... etc.

// Import necessary modules and components
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AirSpeed from "./components/InstrumentCluster/AirSpeed/AirSpeed";
import Altimeter from "./components/InstrumentCluster/Altimeter/Altimeter";
import VerticalSpeed from "./components/InstrumentCluster/VerticalSpeed/VerticalSpeed";
import Rocketmodel from "./components/Rocketmodel/Rocketmodel";
import Heading from "./components/InstrumentCluster/Heading/Heading";
import "./App.css";

// Define the App component
const App = () => {
  // Use the useSelector hook to extract telemetry data from the Redux store
  const telemetryData = useSelector((state) => state.telemetry.value);
  // Render the App component
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="Main_container"
      >
        <Rocketmodel />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <AirSpeed />
            <Altimeter />
          </div>
          <div style={{ display: "flex" }}>
            <VerticalSpeed />
            <Heading pitch={telemetryData.tiltX} roll={telemetryData.tiltY} />
          </div>
        </div>
      </div>
    </>
  );
};

// Export the App component
export default App;

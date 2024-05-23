// Import necessary modules and components
import { useSelector } from "react-redux";
import Rocketmodel from "../../Rocketmodel/Rocketmodel";
import AirSpeed from "../../InstrumentCluster/AirSpeed/AirSpeed";
import Altimeter from "../../InstrumentCluster/Altimeter/Altimeter";
import VerticalSpeed from "../../InstrumentCluster/VerticalSpeed/VerticalSpeed";
import Heading from "../../InstrumentCluster/Heading/Heading";

const MainLanding = () => {
  // Use the useSelector hook to extract telemetry data from the Redux store
  const telemetryData = useSelector((state) => state.telemetry.value);

  return (
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
  );
};

export default MainLanding;

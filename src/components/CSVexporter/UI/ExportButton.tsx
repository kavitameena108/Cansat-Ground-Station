import Button from "@mui/material/Button"; // material-ui component
import { useEffect } from "react"; // react hook
import { useSelector } from "react-redux"; // react-redux hook
import { appendtoCSV, handleExportCSV } from "../CSVgenerator"; // functions to generate and export CSV

// ExportButton component
const ExportButton = () => {
  const telemetryData = useSelector((state) => state.telemetry.value); // get telemetry data from Redux store
  const connected = useSelector((state) => state.connected.value); // get connection status from Redux store

  // useEffect hook to append telemetry data to CSV file when connected
  useEffect(() => {
    if (connected) {
      appendtoCSV(telemetryData);
    }
  }, [telemetryData]); // run when telemetryData changes

  // return ExportButton component
  return (
    <div>
      <Button // Button component to export CSV file
        variant="contained"
        onClick={handleExportCSV}
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#f8f8ff",
          },
          minWidth: "130px",
        }}
      >
        Export CSV
      </Button>
    </div>
  );
};

export default ExportButton;

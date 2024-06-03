// Import necessary modules and components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Box, Button, Input, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import "chartjs-adapter-date-fns";
import PloteGraph from "./PloteGraph";
import { handleFileChange, handleFileUpload } from "../Analysis";

// Register the required components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const Analysis = () => {
  // State to hold the uploaded file
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("No file chosen");
  const [xAxis, setxAxis] = useState<any[] | null>(null);
  const [yAxis, setyAxis] = useState<Date[] | null>(null);
  // Retrieve the launch state from the Redux store
  const launch = useSelector((state) => state.launch.value);

  // Process the parsed data and update the chart data
  const onDataLoaded = (data: any[]) => {
    setxAxis(data.map((item) => item.altitude));
    setyAxis(data.map((item) => new Date(item.gpsTime * 1000)));
  };

  return !launch ? (
    <>
      {/* File input for uploading CSV files */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, margin: 3 }}>
        <Button
          variant="contained"
          component="label"
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#f8f8ff",
            },
          }}
        >
          Choose File
          <input
            type="file"
            hidden
            onChange={(e) => handleFileChange(e, setFile, setFileName)}
            accept=".csv"
          />
        </Button>
        <Typography>{fileName}</Typography>
        {/* Button to trigger file upload and parsing (It is set hidden by default, till file is uploaded)*/}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "black",
            "&:hover": {
              backgroundColor: "#f8f8ff",
            },
          }}
          onClick={(e) => handleFileUpload(e, file, onDataLoaded, setFile)}
          disabled={!file}
        >
          Upload and Parse CSV
        </Button>
      </Box>
      {/* Render the chart using PloteGraph component */}
      <PloteGraph xAxis={xAxis} yAxis={yAxis}></PloteGraph>
    </>
  ) : (
    <div>
      {/* Message to display when no data is available */}
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 30,
          fontSize: 24,
        }}
      >
        Nothing is Available to show....!
      </Typography>
    </div>
  );
};

export default Analysis;

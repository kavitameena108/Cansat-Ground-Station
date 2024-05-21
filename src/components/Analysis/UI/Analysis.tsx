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
import { Button, Input, Typography } from "@mui/material";
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
  const [file, setFile] = useState(null);
  // State to hold the chart data
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Altitude",
        data: [],
        borderColor: "rgb(255, 0, 0)",
        tension: 0.1,
      },
    ],
  });
  // Retrieve the launch state from the Redux store
  const launch = useSelector((state) => state.launch.value);

  // Process the parsed data and update the chart data
  const onDataLoaded = (data: any[]) => {
    const time = data.map((item) => new Date(item.gpsTime * 1000)); // Convert gpsTime to Date object
    const altitudes = data.map((item) => item.altitude); // Extract altitudes

    // Update the chart data state
    setChartData({
      labels: altitudes, // Set altitudes as labels on the x-axis
      datasets: [
        {
          label: "Time", // Set the label for the dataset
          data: time, // Set time as data points
          borderColor: "rgb(255, 0, 0)", // Line color
          tension: 0.1, // Line tension
        },
      ],
    });
  };

  // Define chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Altitude", // Label for the x-axis
        },
      },
      y: {
        type: "time", // Use time scale for y-axis
        time: {
          unit: "minute",
          stepSize: 1,
          tooltipFormat: "PP p",
          displayFormats: {
            minute: "MMM dd, yyyy HH:mm",
            hour: "MMM dd, yyyy HH:mm",
            day: "MMM dd, yyyy",
          },
        },
        title: {
          display: true,
          text: "Time", // Label for the y-axis
        },
      },
    },
  };

  return !launch ? (
    <>
      {/* File input for uploading CSV files */}
      <Input
        sx={{
          margin: 4,
          backgroundColor: "white",
          color: "black",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#f8f8ff",
          },
        }}
        type="file"
        onChange={(e) => handleFileChange(e, setFile)}
      />
      {/* Button to trigger file upload and parsing */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#f8f8ff",
          },
          minWidth: "100px",
        }}
        onClick={(e) => handleFileUpload(e, file, onDataLoaded, setFile)}
      >
        Upload and Parse CSV
      </Button>
      {/* Render the chart using PloteGraph component */}
      <PloteGraph options={options} chartData={chartData}></PloteGraph>
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

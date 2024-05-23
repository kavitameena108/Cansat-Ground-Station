// Import necessary modules and components
import { Box, Card } from "@mui/material";
import { Line } from "react-chartjs-2";
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
import "chartjs-adapter-date-fns";
import { useEffect, useState } from "react";

// Register necessary components with Chart.js
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

// Define the PloteGraph component
const PloteGraph = (props: any) => {
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

  useEffect(() => {
    // Update the chart data state
    setChartData({
      labels: props.xAxis, // Set altitudes as labels on the x-axis
      datasets: [
        {
          label: "Altitude", // Set the label for the dataset
          data: props.yAxis, // Set time as data points
          borderColor: "rgb(255, 0, 0)", // Line color
          tension: 0.1, // Line tension
        },
      ],
    });
  }, [props.xAxis, props.yAxis]);

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

  return (
    <Box sx={{ minWidth: 500, height: 500, margin: 4 }}>
      {/* Card component to contain the Line chart */}
      <Card
        variant="outlined"
        style={{
          margin: 20,
          height: 600,
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
        }}
      >
        {/* Line chart component with options and data passed as props */}
        <Line options={options} data={chartData} />
      </Card>
    </Box>
  );
};

export default PloteGraph;

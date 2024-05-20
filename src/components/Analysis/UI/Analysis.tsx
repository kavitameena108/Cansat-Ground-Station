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
import { Box, Button, Card, Input, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import Papa from "papaparse";
import "chartjs-adapter-date-fns";

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
  const [file, setFile] = useState(null);
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
  const launch = useSelector((state) => state.launch.value);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          onDataLoaded(results.data);
        },
        error: (e) => {
          console.log("Error occurred while parsing: ", e);
        },
      });
      setFile(null);
    }
  };

  const onDataLoaded = (data) => {
    const time = data.map((item) => new Date(item.gpsTime * 1000));
    const altitudes = data.map((item) => item.altitude);

    setChartData({
      labels: altitudes,
      datasets: [
        {
          label: "Time",
          data: time,
          borderColor: "rgb(255, 0, 0)",
          tension: 0.1,
        },
      ],
    });
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Altitude",
        },
      },
      y: {
        type: "time",
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
          text: "Time",
        },
      },
    },
  };

  return !launch ? (
    <>
      <Input
        variant="contained"
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
        accept=".csv"
        onChange={handleFileChange}
      />
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
        onClick={handleFileUpload}
      >
        Upload and Parse CSV
      </Button>
      <Box
        sx={{
          minWidth: "500",
          height: "500",
          margin: 4,
        }}
      >
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
          <Line options={options} data={chartData}></Line>
        </Card>
      </Box>
    </>
  ) : (
    <div>
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

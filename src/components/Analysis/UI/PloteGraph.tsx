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
        <Line options={props.options} data={props.chartData} />
      </Card>
    </Box>
  );
};

export default PloteGraph;

import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AnalysisButton = () => {
  const launch = useSelector((state) => state.launch.value);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!launch) {
      navigate("/analysis");
    } else {
      console.error("Cannot Do this");
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "white",
          color: "black",
          "&:hover": {
            backgroundColor: "#f8f8ff",
          },
          minWidth: "130px",
        }}
        onClick={handleClick}
      >
        Analysis
      </Button>
    </div>
  );
};

export default AnalysisButton;

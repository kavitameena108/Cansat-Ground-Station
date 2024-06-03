// Import necessary libraries and components
import Button from "@mui/material/Button"; // Button component from Material UI
import { useSelector, useDispatch } from "react-redux"; // useDispatch and useSelector hooks from react-redux
import { setLaunch } from "../../../features/mission-state/launchSlice"; // setLaunch action from launchSlice

// Define the StartMission component
const StartMission = () => {
  // Get the connected and launch values from the redux store
  const connected = useSelector((state) => state.connected.value);
  const launch = useSelector((state) => state.launch.value);

  // Get the dispatch function from react-redux
  const dispatch = useDispatch();

  // Define the handleClick function
  // It toggles the launch state when the button is clicked
  const handleClick = () => {
    if (launch) {
      dispatch(setLaunch(false)); // If launch is true, set it to false
    } else {
      dispatch(setLaunch(true)); // If launch is false, set it to true
    }
  };

  // Return the JSX for the StartMission component
  // If not connected, return null
  return connected ? (
    <div>
      <Button
        variant="contained"
        sx={{
          backgroundColor: !launch ? "green" : "red", // Change the background color based on the launch state
          color: "white",
          "&:hover": {
            backgroundColor: !launch ? "#006400" : "#8B0000", // Change the hover color based on the launch state
          },
          "&:disabled": {
            backgroundColor: "red",
            color: "white",
          },
          minWidth: "130px",
        }}
        onClick={handleClick} // Set the onClick handler to the handleClick function
      >
        {launch ? "Stop💥" : "Launch🚀"}
      </Button>
    </div>
  ) : null;
};

// Export the StartMission component as the default export
export default StartMission;

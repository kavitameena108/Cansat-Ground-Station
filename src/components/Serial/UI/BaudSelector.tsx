// Import necessary libraries and components
import Box from "@mui/material/Box"; // Box component from Material UI
import MenuItem from "@mui/material/MenuItem"; // MenuItem component from Material UI
import Select from "@mui/material/Select"; // Select component from Material UI
import { useDispatch, useSelector } from "react-redux"; // useDispatch and useSelector hooks from react-redux
import { setBaudrate } from "../../../features/configs/baudrateSlice"; // setBaudrate action from baudrateSlice

// Define the BaudSelector component
const BaudSelector = () => {
  // Get the dispatch function from react-redux
  const dispatch = useDispatch();

  // Get the current baudrate value from the redux store
  const value = useSelector((state) => state.baudrate.value);

  // Define the handleChange function
  // It dispatches the setBaudrate action with the new value
  const handleChange = (event) => {
    dispatch(setBaudrate(event.target.value));
  };

  // Return the JSX for the BaudSelector component
  return (
    // A Box component from Material UI
    // It has a minimum width of 10
    <Box sx={{ minWidth: 10 }}>
      {/* A Select component from Material UI
      /It has a value, an onChange handler, and some styles */}
      <Select
        value={value}
        onChange={handleChange}
        sx={{
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: "white",
            color: "grey",
          },
          maxHeight: 37,
          minWidth: 100,
        }}
      >
        {/* MenuItem components from Material UI
        /Each one represents a possible baudrate value */}
        <MenuItem value={9600}>9600</MenuItem>
        <MenuItem value={19200}>19200</MenuItem>
        <MenuItem value={38400}>38400</MenuItem>
        <MenuItem value={57600}>57600</MenuItem>
        <MenuItem value={115200}>115200</MenuItem>
      </Select>
    </Box>
  );
};

// Export the BaudSelector component as the default export
export default BaudSelector;

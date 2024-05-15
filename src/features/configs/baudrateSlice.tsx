// Use ReactDOM to render the App component into the root element of the HTML document
import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for baudrate
// A slice includes a reducer, actions, and selectors
export const baudrateSlice = createSlice({
  name: "baudrate", // The name of the slice
  initialState: {
    value: 115200, // The initial state value
  },
  reducers: {
    // Define a reducer for setting the baudrate
    setBaudrate: (state, action) => {
      state.value = action.payload; // Set the state value to the payload of the action
    },
  },
});

export const { setBaudrate } = baudrateSlice.actions;
export default baudrateSlice.reducer;

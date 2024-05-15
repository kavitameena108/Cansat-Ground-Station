// Set the state value to the payload of the action
import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for the launch status
// A slice includes a reducer, actions, and selectors
export const launchSlice = createSlice({
  name: "launch", // The name of the slice
  initialState: {
    value: false, // The initial state value, indicating not launched
  },
  reducers: {
    // Define a reducer for setting the launch status
    setLaunch: (state, action) => {
      state.value = action.payload; // Set the state value to the payload of the action
    },
  },
});

// Export the actions created by createSlice
export const { setLaunch } = launchSlice.actions;

// Export the reducer created by createSlice
export default launchSlice.reducer;

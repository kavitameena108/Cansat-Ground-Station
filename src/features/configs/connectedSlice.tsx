// Set the state value to the payload of the action
import { createSlice } from "@reduxjs/toolkit";

// Create a slice of the Redux store for the connection status
// A slice includes a reducer, actions, and selectors
export const connectedSlice = createSlice({
  name: "connected", // The name of the slice
  initialState: {
    value: false, // The initial state value, indicating not connected
  },
  reducers: {
    // Define a reducer for setting the connection status
    setConnected: (state, action) => {
      state.value = action.payload; // Set the state value to the payload of the action
    },
  },
});

export const { setConnected } = connectedSlice.actions;
export default connectedSlice.reducer;

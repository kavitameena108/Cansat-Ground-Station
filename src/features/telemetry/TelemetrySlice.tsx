import { createSlice } from "@reduxjs/toolkit"; // Export the reducer created by createSlice

// Define the initial state for the telemetry data
const dataSend = {
  packetCount: 0,
  mode: 0,
  state: 0,
  altitude: 0,
  temperature: 0,
  pressure: 0,
  voltage: 0,
  gpsTime: 0,
  gpsLatitude: 0,
  gpsLongitude: 0,
  gpsSats: 0,
  tiltX: 0,
  tiltY: 0,
  rotZ: 0,
};

// Create a slice of the Redux store for the telemetry data
// A slice includes a reducer, actions, and selectors
export const TelemetrySlice = createSlice({
  name: "telemetry", // The name of the slice
  initialState: {
    value: dataSend, // The initial state value
  },
  reducers: {
    // Define a reducer for pushing new telemetry data
    pushData: (state, action) => {
      state.value = action.payload; // Set the state value to the payload of the action
    },
  },
});
// Export the actions created by createSlice
export const { pushData } = TelemetrySlice.actions;
// Export the reducer created by createSlice
export default TelemetrySlice.reducer;

// Import the configureStore function from Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Import the reducers for telemetry, baudrate, connected, and launch features
import TelemetryReducer from "../features/telemetry/TelemetrySlice";
import baudrateReducer from "../features/configs/baudrateSlice";
import connectedReducer from "../features/configs/connectedSlice";
import launchReducer from "../features/mission-state/launchSlice";

// Use the configureStore function to create a Redux store
// The store is configured with the imported reducers
// Each reducer is responsible for handling actions related to a specific feature

export default configureStore({
  reducer: {
    telemetry: TelemetryReducer, // Handles actions related to telemetry feature
    baudrate: baudrateReducer, // Handles actions related to baudrate configuration
    connected: connectedReducer, // Handles actions related to connection status
    launch: launchReducer, // Handles actions related to launch state
  },
});

// Import the ExportButton component
import ExportButton from "../components/CSVexporter/UI/ExportButton";

// Import the Provider component from react-redux
// This component makes the Redux store available to any nested components
import { Provider } from "react-redux";

// Import the Redux store
import store from "../app/store";

// Define the default export object for Storybook
export default {
  title: "Export Button",
  component: ExportButton,
};

// Define a story for the default state of the ExportButton component
export const Default = () => (
  // Wrap the ExportButton component in a Provider component
  // This gives the ExportButton component access to the Redux store
  <Provider store={store}>
    <ExportButton />
  </Provider>
);

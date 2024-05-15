// Import the ExportButton component
import ExportButton from "../components/CSVexporter/UI/ExportButton";

// Import the Provider component from react-redux
// This component makes the Redux store available to any nested components
import { Provider } from "react-redux";

// Import the Redux store
import store from "../app/store";

import { Story, Meta } from "@storybook/react";

// Define the default export object for Storybook
export default {
  title: "Export Button",
  component: ExportButton,
} as Meta;

// Define a story for the default state of the ExportButton component
const Template: Story = () => (
  // Wrap the ExportButton component in a Provider component
  // This gives the ExportButton component access to the Redux store
  <Provider store={store}>
    <ExportButton />
  </Provider>
);

// Define the Default story with Template as the component
export const Default = Template.bind({});

// Import the Provider component from react-redux
// This component makes the Redux store available to any nested components
import { Provider } from "react-redux";

// Import the Redux store
import store from "../app/store";

// Import the ConnectButton component
import ConnectButton from "../components/Serial/UI/ConnectButton";

// Define the default export object for Storybook
export default {
  title: "Connect Button",
  component: ConnectButton,
};

// Define a story for the default state of the ConnectButton component
export const Default = () => (
  // Wrap the ConnectButton component in a Provider component
  // This gives the ConnectButton component access to the Redux store
  <Provider store={store}>
    <ConnectButton />
  </Provider>
);

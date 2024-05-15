// Import the Compass component
import Compass from "../components/InstrumentCluster/Compass/Compass";

// Define the default export object for Storybook
export default {
  title: "Instrument Cluster/Compass", // The title of the component in Storybook
  component: Compass, // The component to be displayed in Storybook
};

// Define a template for creating stories
const Template = (args) => <Compass {...args} />; // The args will be the props passed to the Compass component

// Define a story for the default state of the Compass component
export const Default = Template.bind({}); // Bind the template to create a new function
Default.args = {
  direction: 60,
  width: 300,
  height: 300,
};

// Define a story for the Compass component pointing North
export const North = Template.bind({}); // Bind the template to create a new function
North.args = {
  direction: 0,
  width: 300,
  height: 300,
};

// Define a story for the Compass component pointing West
export const West = Template.bind({}); // Bind the template to create a new function
West.args = {
  direction: 90,
  width: 300,
  height: 300,
};

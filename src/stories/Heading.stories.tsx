// Import the Heading component
import Heading from "../components/InstrumentCluster/Heading/Heading";

// Define the default export object for Storybook
export default {
  title: "Instrument Cluster/Heading", // The title of the component in Storybook
  component: Heading, // The component to be displayed in Storybook
};

// Define a template for creating stories
const Template = (args) => <Heading {...args} />; // The args will be the props passed to the Heading component

// Define a story for the default state of the Heading component
export const Default = Template.bind({}); // Bind the template to create a new function
Default.args = {
  pitch: 20,
  roll: 30,
  width: 300,
  height: 300,
};

// Define a story for the Heading component with a pitch and no roll
export const Pitch = Template.bind({}); // Bind the template to create a new function
Pitch.args = {
  pitch: 20,
  roll: 0,
  width: 300,
  height: 300,
};

// Define a story for the Heading component with a roll and no pitch
export const Roll = Template.bind({}); // Bind the template to create a new function
Roll.args = {
  pitch: 0,
  roll: 30,
  width: 300,
  height: 300,
};

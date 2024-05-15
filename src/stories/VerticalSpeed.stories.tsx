// Import the VerticalSpeed component
import VerticalSpeed from "../components/InstrumentCluster/VerticalSpeed/VerticalSpeed";

// Define the default export object for Storybook
export default {
  title: "Instrument Cluster/VerticalSpeed", // The title of the component in Storybook
  component: VerticalSpeed, // The component to be displayed in Storybook
};

// Define a template for creating stories
const Template = (args) => <VerticalSpeed {...args} />; // The args will be the props passed to the VerticalSpeed component

// Define a story for the default state of the VerticalSpeed component
export const Default = Template.bind({}); // Bind the template to create a new function
Default.args = {
  verticalSpeed: 0,
  width: 300,
  height: 300,
};

// Define a story for the VerticalSpeed component with zero vertical speed
export const Zero = Template.bind({}); // Bind the template to create a new function
Zero.args = {
  verticalSpeed: 0,
  width: 300,
  height: 300,
};

// Define a story for the VerticalSpeed component with maximum vertical speed
export const Max = Template.bind({}); // Bind the template to create a new function
Max.args = {
  verticalSpeed: 0,
  width: 300,
  height: 300,
};

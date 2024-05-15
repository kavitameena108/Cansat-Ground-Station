// Import the AirSpeed component
import AirSpeed from "../components/InstrumentCluster/AirSpeed/AirSpeed";

// Define the default export object for Storybook
export default {
  title: "Instrument Cluster/AirSpeed", // The title of the component in Storybook
  component: AirSpeed, // The component to be displayed in Storybook
};

// Define a template for creating stories
const Template = (args) => <AirSpeed {...args} />; // The args will be the props passed to the AirSpeed component

// Define a story for the default state of the AirSpeed component
export const Default = Template.bind({}); // Bind the template to create a new function
Default.args = {
  speed: 50,
  width: 300,
  height: 300,
};

// Define a story for the AirSpeed component with zero speed
export const ZeroSpeed = Template.bind({}); // Bind the template to create a new function
ZeroSpeed.args = {
  speed: 0,
  width: 300,
  height: 300,
};

// Define a story for the AirSpeed component with maximum speed
export const MaxSpeed = Template.bind({}); // Bind the template to create a new function
MaxSpeed.args = {
  speed: 160,
  width: 300,
  height: 300,
};

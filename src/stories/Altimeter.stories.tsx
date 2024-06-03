// Import the Altimeter component
import Altimeter from "../components/InstrumentCluster/Altimeter/Altimeter";

// Define the default export object for Storybook
export default {
  title: "Instrument Cluster/Altimeter", // The title of the component in Storybook
  component: Altimeter, // The component to be displayed in Storybook
};

// Define a template for creating stories
const Template = (args) => <Altimeter {...args} />; // The args will be the props passed to the Altimeter component

// Define a story for the default state of the Altimeter component
export const Default = Template.bind({}); // Bind the template to create a new function
Default.args = {
  altitude: 400,
  width: 300,
  height: 300,
};

// Define a story for the Altimeter component with zero altitude
export const ZeroAltitude = Template.bind({}); // Bind the template to create a new function
ZeroAltitude.args = {
  altitude: 0,
  width: 300,
  height: 300,
};

// Define a story for the Altimeter component with maximum altitude
export const MaxAltitude = Template.bind({}); // Bind the template to create a new function
MaxAltitude.args = {
  altitude: 8950,
  width: 300,
  height: 300,
};

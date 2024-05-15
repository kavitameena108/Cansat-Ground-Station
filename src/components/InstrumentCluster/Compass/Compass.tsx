// Import the CSS for the Compass component
import "./Compass.css";

// Import the SVGs for the Compass component
import Heading from "../../../Assets/img/heading_yaw.svg?react";
import Pointer from "../../../Assets/img/heading_mechanics.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

// Define the Compass component
// It takes three props: direction, width, and height
// The default values for these props are 0, 300, and 300 respectively
const Compass = ({ direction = 0, width = 300, height = 300 }) => {
  // Return the JSX for the Compass component
  return (
    // A div that contains the Compass component
    // The width and height of this div are set by the width and height props
    <div className="container" style={{ width, height }}>
      <Heading
        className="heading-container"
        style={{ transform: `rotate(${direction}deg)` }}
      />
      <Pointer className="pointer-container" />
      <Border className="border-container" />
    </div>
  );
};

// Export the Compass component as the default export
export default Compass;

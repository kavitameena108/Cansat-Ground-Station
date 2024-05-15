// Import the CSS for the VerticalSpeed component
import "./VerticalSpeed.css";

// Import the SVGs for the VerticalSpeed component
import Vertical from "../../../Assets/img/vertical_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

// Define the VerticalSpeed component
// It takes three props: verticalSpeed, width, and height
// The default values for these props are 0, 300, and 300 respectively
const VerticalSpeed = ({ verticalSpeed = 0, width = 300, height = 300 }) => {
  // Return the JSX for the VerticalSpeed component
  return (
    // A div that contains the VerticalSpeed component
    // The width and height of this div are set by the width and height props
    <div className="container" style={{ width, height }}>
      <Vertical className="vertical-container" />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${verticalSpeed}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

// Export the VerticalSpeed component as the default export
export default VerticalSpeed;

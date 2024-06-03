// Import the CSS for the AirSpeed component
import "./AirSpeed.css";
// Import the SVGs for the AirSpeed component
import AirSpeedDial from "../../../Assets/img/speed_mechanics.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

// Define the AirSpeed component
// It takes three props: speed, width, and height
// The default values for these props are 0, 300, and 300 respectively
const AirSpeed = ({ speed = 0, width = 300, height = 300 }) => {
  // Return the JSX for the AirSpeed component
  return (
    // A div that contains the AirSpeed component
    // The width and height of this div are set by the width and height props
    <div className="container" style={{ width, height }}>
      <AirSpeedDial className="dial-container" />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${2 * speed + 90}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};
// Export the AirSpeed component as the default export
export default AirSpeed;

// Import the CSS for the Altimeter component
import "./Altimeter.css";

// Import the SVGs for the Altimeter component
import AltimeterPressure from "../../../Assets/img/altitude_pressure.svg?react";
import AltimeterTick from "../../../Assets/img/altitude_ticks.svg?react";
import Needle from "../../../Assets/img/fi_needle.svg?react";
import SmallNeedle from "../../../Assets/img/fi_needle_small.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

// Define the Altimeter component
// It takes four props: altitude, pressure, width, and height
// The default values for these props are 0, 0, 300, and 300 respectively
const Altimeter = ({
  altitude = 0,
  pressure = 0,
  width = 300,
  height = 300,
}) => {
  // Return the JSX for the Altimeter component
  return (
    // A div that contains the Altimeter component
    // The width and height of this div are set by the width and height props
    <div className="container" style={{ width, height }}>
      <AltimeterPressure
        className="pressure-container"
        style={{ transform: `rotate(${pressure}deg)` }}
      />
      <AltimeterTick className="tick-container" />
      <SmallNeedle
        className="small-needle-container"
        style={{ transform: `rotate(${altitude * 0.036}deg)` }}
      />
      <Needle
        className="needle-container"
        style={{ transform: `rotate(${altitude * 0.36 + 90}deg)` }}
      />
      <Border className="border-container" />
    </div>
  );
};

// Export the Altimeter component as the default export
export default Altimeter;

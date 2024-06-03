// Import the CSS for the Heading component
import "./Heading.css";

// Import the React library
import React from "react";

// Import the SVGs for the Heading component
import Background from "../../../Assets/img/horizon_back.svg?react";
import HorizonBall from "../../../Assets/img/horizon_ball.svg?react";
import HorizonCircle from "../../../Assets/img/horizon_circle.svg?react";
import HorizonMechanics from "../../../Assets/img/horizon_mechanics.svg?react";
import Border from "../../../Assets/img/fi_circle.svg?react";

// Define the Heading component
// It takes four props: pitch, roll, width, and height
// The default values for these props are 0, 0, 300, and 300 respectively
const Heading = ({ pitch = 0, roll = 0, width = 300, height = 300 }) => {
  // Define the maximum and minimum pitch
  const maxPitch = height / 2 - height / 3;
  const minPitch = -(height / 2 - height / 3);

  // Limit the pitch to the maximum and minimum pitch
  const limitedPitch = Math.min(Math.max(pitch, minPitch), maxPitch);

  // Calculate the sine and cosine of the roll
  const sinRoll = Math.sin((roll * Math.PI) / 180);
  const cosRoll = Math.cos((roll * Math.PI) / 180);

  // Return the JSX for the Heading component
  return (
    // A div that contains the Heading component
    // The width and height of this div are set by the width and height props
    <div className="container" style={{ width, height }}>
      <Background
        className="container-background"
        style={{ transform: `rotate(${roll}deg)` }}
      />
      <HorizonBall
        className="container-horizontal"
        style={{
          transform: `translateX(${limitedPitch * sinRoll}px) translateY(${limitedPitch * -cosRoll}px) rotate(${roll}deg)`,
        }}
      />
      <HorizonCircle
        className="container-background"
        style={{ transform: `rotate(${roll}deg)` }}
      />
      <HorizonMechanics className="container-fixed" />
      <Border className="container-fixed" />
    </div>
  );
};

// Export the Heading component as the default export
export default Heading;

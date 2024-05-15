// Import necessary libraries and components
import React, { useState } from "react"; // React library and useState hook
import { Box } from "@mui/material"; // Box component from Material UI
import { Canvas } from "@react-three/fiber"; // Canvas component from react-three/fiber
import { OrbitControls, useGLTF } from "@react-three/drei"; // OrbitControls and useGLTF from react-three/drei
import { Euler } from "three"; // Euler from three.js

// Define the Rocketmodel component
// It takes one prop: initialOrientation
const Rocketmodel = ({ initialOrientation }) => {
  // Define the state for the orientation of the rocket
  // The initial state is set to the initialOrientation prop or {x: 0, y: 0, z: 0}
  const [orientation, setOrientation] = useState(
    initialOrientation || { x: 0, y: 0, z: 0 }
  );

  // Load the rocket model using the useGLTF hook
  const { scene } = useGLTF("rocket.glb");

  // Convert the orientation from degrees to radians and create an Euler object
  const euler = new Euler(
    (orientation.x || 0) * (Math.PI / 180),
    (orientation.y || 0) * (Math.PI / 180),
    (orientation.z || 0) * (Math.PI / 180)
  );

  // Return the JSX for the Rocketmodel component
  return (
    // A Box component from Material UI
    // It has a fixed width and height, a border, and a background color
    <Box
      sx={{
        width: "600px",
        height: "600px",
        border: "2px solid #000",
        backgroundColor: "#2F2F2F",
      }}
    >
      {/* A Canvas component from react-three/fiber
       It has a class name and a frame loop */}
      <Canvas className="cursor-pointer" frameloop="demand">
        <ambientLight intensity={5} />

        {/* OrbitControls from react-three/drei
         Rotation, panning, and zooming are disabled */}
        <OrbitControls
          enableRotate={false}
          enablePan={false}
          enableZoom={false}
        />

        {/* A primitive component that represents the rocket model
         It has a scale, rotation, and position */}
        <primitive
          object={scene}
          scale={[0.1 * 1.45, 0.1 * 1.45, 0.1 * 1.45]}
          rotation={euler}
          position={[0, 0, 0]}
        />
      </Canvas>
    </Box>
  );
};

// Define the default props for the Rocketmodel component
Rocketmodel.defaultProps = {
  initialOrientation: { x: 0, y: 0, z: 0 },
};

// Export the Rocketmodel component as the default export
export default Rocketmodel;

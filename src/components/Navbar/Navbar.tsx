// Import the CSS for the Navbar component
import "./Navbar.css";

// Import the components used in the Navbar
import ConnectButton from "../Serial/UI/ConnectButton";
import BaudSelector from "../Serial/UI/BaudSelector";
import ExportButton from "../CSVexporter/UI/ExportButton";
import StartMission from "../StartMission/UI/StartMission";

// Import the necessary components from the Material UI library
import { AppBar, Toolbar, Box } from "@mui/material";

// Define the Navbar component
const Navbar = () => {
  // Return the JSX for the Navbar component
  return (
    // The AppBar component from Material UI
    // It is positioned statically and has a custom background color
    <AppBar position="static" style={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar>
        {/* A Box component from Material UI */}
        {/* It is displayed as a flex container, with its items aligned in the center and taking up the full width */}
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <img className="logo-container" src="gagan.png" alt="Logo" />

          {/*  A Box component from Material UI */}
          {/* It is used to take up the remaining space, pushing the following components to the right */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ ml: 2 }}>
            <StartMission />
          </Box>

          <Box sx={{ ml: 2 }}>
            <ExportButton />
          </Box>

          <Box sx={{ ml: 2 }}>
            <BaudSelector />
          </Box>

          <Box sx={{ ml: 2 }}>
            <ConnectButton />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Export the Navbar component as the default export
export default Navbar;

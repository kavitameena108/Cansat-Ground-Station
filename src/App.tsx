//This is the App component that renders different components like Navbar, Airspeed ... etc.

// Import necessary modules and components
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analysis from "./components/Analysis/UI/Analysis";
import "./App.css";
import MainLanding from "./components/MainLanding/UI/MainLanding";

// Define the App component
const App = () => {
  // Render the App component
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<MainLanding />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

// Export the App component
export default App;

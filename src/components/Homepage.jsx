import React from "react"
import Navbar from "./Navbar.jsx"
import "./components.css"
import Carousal from "./Carousal.jsx";
import TrendingComponent from "./TrendingComponent.jsx";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <TrendingComponent />
    </div>
  );
};
export default Homepage

import React from "react"
import Navbar from "./Navbar.jsx"
import "./components.css"
import Carousal from "./Carousal.jsx";
import TrendingComponent from "./TrendingComponent.jsx";
import CommentSection from "./Comments.jsx";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <TrendingComponent />
      <CommentSection/>
    </div>
  );
};
export default Homepage

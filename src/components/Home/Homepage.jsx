import React from "react"
import Navbar from "./Navbar.jsx"
import "./components.css"
import Carousal from "./Carousal.jsx";
import TrendingComponent from "./TrendingComponent.jsx";
import CommentSection from "./Comments.jsx";
import Bifurcation from "./Bifurcation.jsx";
import AllAnime from "./AllAnime.jsx";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Carousal />
      <TrendingComponent />
      <CommentSection/>
      <Bifurcation />
      <AllAnime />
    </div>
  );
};
export default Homepage

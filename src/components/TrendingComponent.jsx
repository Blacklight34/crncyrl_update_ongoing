import React, { useState, useEffect } from "react";
import PopularCards from "./PopularCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

const TrendingComponent = () => {
  const inFrame = 4;
  const [popularData, setPopularData] = useState([]);
  const [popularSliderStart, setPopularSliderStart] = useState(0);
  // const [inFrame, setInFrame] = useState(4);
  const getPopularAnimeData = async () => {
    const rawData = await fetch("https://webdis-4d5t.onrender.com/popular");
    const json = await rawData?.json();
    // console.log(json);
    setPopularData(json);
  };
  const handlePrev = () => {
    // setCurrent(current - 1 < 0 ? current + images.length - 1 : current - 1);
    setPopularSliderStart(popularSliderStart - 1);
  };
  const handleNext = () => {
    // setCurrent((current + 1) % CarousalImages.length);
    setPopularSliderStart(popularSliderStart + 1);
  };
  useEffect(() => {
    getPopularAnimeData();
  }, []);
  return (
    <div className="popular">
      <h2>
        Trending
        <FontAwesomeIcon icon={faStar} style={{ color: "#ffea00" }} />
      </h2>
      <div className="popular_slider">
        {popularData.map((single, index) => {
          // index = popularSliderStart;
          if (index <= (inFrame)) {
            return <PopularCards {...single} />;
          } 
        })}
        <div className="popular_carousal_nav">
          <button onClick={handlePrev}>
            <FontAwesomeIcon icon={faLeftLong} style={{ color: "#f7f7f7" }} />
          </button>
          <button onClick={handleNext}>
            <FontAwesomeIcon icon={faRightLong} style={{ color: "#f7f7f7" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;

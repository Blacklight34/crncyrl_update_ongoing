import React, { useState, useEffect } from "react";
import { CarousalImages } from "../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faCirclePlay, faHardDrive } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
const Carousal = () => {
  const [current, setCurrent] = useState(0);
  const [nextToCurrent, setNextToCurrent] = useState(0)
  const handlePrev = () => {
    setCurrent(current - 1 < 0 ? current + images.length - 1 : current - 1);
  };
  const handleNext = () => {
    setCurrent((current + 1) % CarousalImages.length);
  };
  const handleTimer = () => {
    setInterval(() => {
      setCurrent((current + 1) % CarousalImages.length);
      setNextToCurrent(((current + 1) % CarousalImages.length)+1)
    }, 5000);
  };
  return (
    <div className="carousal_main_body">
      <div className="cImages">
        <img src={CarousalImages[current].url} ></img>
        {/* <img src={CarousalImages[nextToCurrent].url} className="next_active" height="100%" width="100%"></img> */}

        <div className="anime-carousal-data">
          <p className="anime-carousal-data-title">
            {CarousalImages[current].name}
          </p>
          <p><FontAwesomeIcon icon={faHardDrive} style={{color: "#00ff1e",}} /></p>
          <p className="anime-carousal-data-desc">
            {CarousalImages[current].desc}
          </p>
          <div>
            <button><FontAwesomeIcon icon={faCirclePlay} />  Watch Now</button>
            <button>Details  <FontAwesomeIcon icon={faRightLong} style={{color: "#1d2d49",}} /></button>
          </div>
        </div>
      </div>
      <div className="navigation_carousal">
        <button onClick={handlePrev}>
          <FontAwesomeIcon icon={faLeftLong} style={{ color: "#f7f7f7" }} />
        </button>
        <button onClick={handleNext}>
          <FontAwesomeIcon icon={faRightLong} style={{ color: "#f7f7f7" }} />
        </button>
      </div>
    </div>
  );
};
export default Carousal;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong} from "@fortawesome/free-solid-svg-icons";
const Bifurcation = () => {
  const [popularData, setPopularData] = useState([]);
  const [airingData, setAiringData] = useState([]);
  const [recentData, setRecentData] = useState([]);
  const getAnimeList = async () => {
    const popularData = await fetch("https://webdis-4d5t.onrender.com/popular");
    const topAiringData = await fetch(
      "https://webdis-4d5t.onrender.com/top-airing"
    );
    const recentData = await fetch(
      "https://webdis-4d5t.onrender.com/recent-release"
    );

    const pJson = await popularData?.json();
    const tJson = await topAiringData?.json();
    const rJson = await recentData?.json();
    // console.log("Data=>>>>>>>")
    // console.log(pJson)
    // console.log(tJson)
    // console.log(rJson)
    setPopularData(pJson);
    setAiringData(tJson);
    setRecentData(rJson);
  };
  useEffect(() => {
    getAnimeList();
  }, []);
  return (
    <div className="recent_popular_airing">
      <div className="r-cards">
        <h2 className="recent_heading">Recent</h2>
        {recentData?.map((single, index) => {
          if (index <= 5) {
            if (index % 2 == 0) {
              return <div className="inner_card_even"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            } else {
              return <div className="inner_card_odd"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            }
          }
        })}
        <button className="view_more">View More <FontAwesomeIcon icon={faRightLong} style={{color: "#1d2d49",}} /></button>
      </div>
      <div className="p-cards">
      <h2 className="recent_heading">Popular</h2>
        {popularData?.map((single, index) => {
          if (index <= 5) {
            if (index % 2 == 0) {
              return <div className="inner_card_even"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            } else {
              return <div className="inner_card_odd"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            }
          }
        })}
        <button className="view_more">View More <FontAwesomeIcon icon={faRightLong} style={{color: "#1d2d49",}} /></button>
      </div>
      <div className="a-cards">
      <h2 className="recent_heading">Recent Airing </h2>
        {airingData?.map((single, index) => {
          if (index <= 5) {
            if (index % 2 == 0) {
              return <div className="inner_card_even"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            } else {
              return <div className="inner_card_odd"><img src={single.animeImg}></img><span>{single.animeTitle}</span></div>;
            }
          }
        })}
        <button className="view_more">View More <FontAwesomeIcon icon={faRightLong} style={{color: "#1d2d49",}} /></button>
      </div>
    </div>
  );
};
export default Bifurcation;

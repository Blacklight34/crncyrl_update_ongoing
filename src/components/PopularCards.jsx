import React from "react";

const PopularCards = ({animeImg, animeTitle}) => {
  return (
    <div className="card">
      <h3 className="title">{animeTitle}</h3>
      <img src={animeImg}></img>
    </div>
  );
};
export default PopularCards

import React from "react";

const PopularCards = ({animeImg, animeTitle}) => {
  return (
    <div className="card-p">
      <h3 className="title-p">{animeTitle}</h3>
      <img src={animeImg}></img>
    </div>
  );
};
export default PopularCards

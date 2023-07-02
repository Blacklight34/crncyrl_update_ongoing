import React, { useEffect, useState } from "react";
import Discussion from "../assets/discussion.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCircle } from "@fortawesome/free-solid-svg-icons";
import CommentCard from "./CommentCard";
const CommentSection = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const getAnimeReview = async () => {
    const data = await fetch("https://api.jikan.moe/v4/reviews/anime");
    const json = await data?.json();
    console.log(json?.data);
    setReviewsData(json?.data);
  };

  useEffect(() => {
    getAnimeReview();
  }, []);
  return (
    <div>
      <h3 className="heading">
        Comment Section{" "}
        <FontAwesomeIcon icon={faComment} style={{ color: "#fff700" }} />
      </h3>
      <div className="commentSection">
        <img className="comment_img" src={Discussion}></img>
        <div className="comments">
          <div className="Cbuttons">
            <div className="batch1">
              <button>Newest Comments</button>
              <button>Top Comments</button>
            </div>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
          </div>
          <div className="commentComponents">
            {
                (reviewsData) ? (reviewsData.map((single, index)=>{
                    return <CommentCard {...single} />
                })) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

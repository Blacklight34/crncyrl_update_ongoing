import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCircle } from "@fortawesome/free-solid-svg-icons";
const CommentCard = (props) => {
  console.log(props);
  return (
    <div className="SingleBox">
      <div className="profile_pic">
        <img src={props?.user?.images?.jpg?.image_url}></img>
      </div>
      <div className="profile_com">
        <span>
          {props?.user?.username}{" "}
          <FontAwesomeIcon icon={faCircle} style={{ color: "#07f24e" }} />{" "}
          <span className="anime_name">{props?.entry?.title}</span>
        </span>
        <p>{props?.review}</p>
      </div>
    </div>
  );
};
export default CommentCard;

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { arr, genre, genreAll } from "../assets/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faComments, faPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleShow = () => {
    setShowAll(!showAll);
  }
  return (
    <div className="navbar">
      <div className="menu-logo">
        <button className="menu" onClick={handleClick}>
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-filled/50/menu--v1.png"
            alt="menu--v1"
          />
        </button>
        <div className={(visible) ? "sidebar visible" : "sidebar invisible"}>
          <button className="sidebar-button" onClick={handleClick}> <FontAwesomeIcon icon={faArrowLeft} /> Close Sidebar</button>
          <div className="donate_comm">
            <button className="sidebar-button-donate">Donate</button>
            <button className="sidebar-button-community"><FontAwesomeIcon icon={faComments} style={{color: "#41e614",}} /> Community</button>
          </div>
          <ul>
            {
              (arr).map((single)=>{
                return <li className="singleCompartment">{single}</li>
              })
            }
          </ul>
          <ul className="genre">
            {
              (genre).map((single)=>{
                return <li className="genreCompartment">{single}</li>
              })
            }
          </ul>
          <ul>
            {
            (!showAll) ? <li onClick={handleShow} className="extra_genre">Show More <FontAwesomeIcon icon={faPlus} style={{color: "#74c0fc",}} /></li>: <ul className="genre">{(genreAll).map((single)=>{
                return <li className="genreCompartment extra">{single}</li>
              })}
              </ul>
              
            }
          </ul>

        </div>
        <img className="logo" width="130" height="40" src={logo} />
      </div>
      
    </div>
  );
};
export default Navbar;

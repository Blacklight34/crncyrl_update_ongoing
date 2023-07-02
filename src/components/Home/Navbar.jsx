import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { arr, genre, genreAll } from "../assets/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faComments,
  faPlus,
  faMagnifyingGlass,
  faSignal,
  faRightLong
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const searchFrame = 5
  const [visible, setVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleClick = () => {
    setVisible(!visible);
  };
  const handleShow = () => {
    setShowAll(!showAll);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSearchAnime = async () => {
    // const data
    const data = await fetch(
      "https://webdis-4d5t.onrender.com/search?keyw=" + search
    );
    const json = await data?.json();
    // console.log(json);
    setSearchResult(json);
  };
  useEffect(() => {
    handleSearchAnime();
  }, [search]);
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

        <div className={visible ? "sidebar visible" : "sidebar invisible"}>
          <button className="sidebar-button" onClick={handleClick}>
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> Close Sidebar
          </button>
          <div className="donate_comm">
            <button className="sidebar-button-donate">Donate</button>
            <button className="sidebar-button-community">
              <FontAwesomeIcon icon={faComments} style={{ color: "#41e614" }} />{" "}
              Community
            </button>
          </div>
          <ul>
            {arr.map((single) => {
              return <li className="singleCompartment">{single}</li>;
            })}
          </ul>
          <ul className="genre">
            {genre.map((single) => {
              return <li className="genreCompartment">{single}</li>;
            })}
          </ul>
          <ul>
            {!showAll ? (
              <li onClick={handleShow} className="extra_genre">
                Show More{" "}
                <FontAwesomeIcon icon={faPlus} style={{ color: "#74c0fc" }} />
              </li>
            ) : (
              <ul className="genre">
                {genreAll.map((single) => {
                  return <li className="genreCompartment extra">{single}</li>;
                })}
              </ul>
            )}
          </ul>
        </div>
        <img className="logo" width="130" height="40" src={logo} />
      </div>
      <div className="search_socials">
        <div className="search">
          <input
            type="text"
            placeholder="Search anime..."
            onChange={handleChange}
          ></input>
          <div className={search ? "search_modal show_result" : "none"}>
            <ul>
              {searchResult.map((single,index) => {
                if(index <= searchFrame){
                  return (
                    <li className="search_res">
                      <img src={single.animeImg}></img>
                      <div className="search_details"><span>{single.animeTitle}</span><p>{single.status}</p></div>
                    </li>

                  );
                }
              })}
            </ul>
            <button className="show_all">Show All Results <FontAwesomeIcon icon={faRightLong} /></button>
          </div>
          <div className="icon_filter">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <button>Filter</button>
          </div>
        </div>
        <div className="socials">
          <button>Twitter</button>
          <button>Discord</button>
          <button>Reddit</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

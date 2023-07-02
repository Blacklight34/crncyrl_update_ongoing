import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./Cards";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { arr, genre, genreAll } from "../assets/constants";

const AllAnime = () => {
    const [airing, setAiring] = useState([])
    const [popular, setPopular] = useState([])
    const getAnimeData = async() => {
        const data1 = await fetch("https://webdis-4d5t.onrender.com/popular")
        const data2 = await fetch("https://webdis-4d5t.onrender.com/recent-release")
        const json1 = await data1?.json();
        const json2 = await data2?.json();
        setAiring(json2)
        setPopular(json1)
    }
    useEffect(()=>{
        getAnimeData();
    },[])
  return (
    <div className="all-anime-genre">
      <div className="popular-genre">
        <div className="popular-single">
          <div className="heading-p-s">
            <button>Popular <FontAwesomeIcon icon={faRightLong} /></button>
          </div>
          <div className="card-p-s">
            {
                (popular).map((single, index)=>{
                    if(index <= 11)
                        return <Cards {...single}/>
                })
            }
          </div>
        </div>
      </div>
      <div className="airing-all">
        <div className="airing-single">
          <div className="heading-p-s">
          <button>Airing <FontAwesomeIcon icon={faRightLong} /></button>
          </div>
          <div className="card-p-s">
          {
                (airing).map((single, index)=>{
                    if(index <= 11)
                        return <Cards {...single}/>
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAnime;

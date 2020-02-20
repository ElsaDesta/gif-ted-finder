import React from "react";
import Gif from "../Gif/Gif";
import "./GifList.css";

const GifList = ({ listOfGifs, onClick }) => {
  return (
    <div className="gif-list">
      {listOfGifs.map(element => (
        <Gif key={element.id} gif={element} onClick={onClick}/>
      ))}
    </div>
  );
};

export default GifList;

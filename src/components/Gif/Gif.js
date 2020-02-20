import React from "react";
import "./Gif.css";

const Gif = ({ gif, onClick }) => {
  /*   function clickedGif() {
    onClick(gif);
  } */

  const clickedGif = () => {
    onClick(gif);
  };

  return (
    <img
      className="gif"
      src={gif.images.downsized_large.url}
      alt="gif"
      onClick={clickedGif}
    />
  );
};

export default Gif;

import React from "react";
import "./SelectedGif.css";

const SelectedGif = ({ selected }) => {
  return (
    <div className="gif-selected">
      <img src={selected.downsized_large.url} alt="gif" />
    </div>
  );
};

export default SelectedGif;

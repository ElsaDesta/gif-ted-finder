import React from "react";
import "./SearchBar.css";

const SearchBar = ({ handleChange, handleUserInput }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for gif here..."
        onChange={handleChange}
      />
      <button type="submit" onClick={handleUserInput}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;

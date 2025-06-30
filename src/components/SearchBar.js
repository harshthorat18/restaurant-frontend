import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar({ onSearch }) {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Search by name or category..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

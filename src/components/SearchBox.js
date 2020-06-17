import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input type="search" placeholder="Search" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

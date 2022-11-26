import React, { useState, useEffect } from "react";
import style from "./style.module.css";

const Search = (props) => {
  const { searchCountry } = props;
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    searchCountry(searchText);
    //eslint-disable-next-line
  },[searchText]);

  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Search here..."
        autoFocus
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};

export default Search;

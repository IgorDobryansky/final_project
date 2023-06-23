import React, { useState } from "react";
import "./_search.scss";
import img from "../../assets/images/search/search.png";

const Search = () => {
  const [setValue] = useState();
  return (
    <form className="search__form">
      <input
        className="search__input"
        type="text"
        placeholder="Пошук"
        onChange={(event) => setValue(event.target.value)}
      />
      <img className="search__icon" src={img} alt="search" />
    </form>
  );
};

export default Search;

import React from "react";
import "./_search.scss";
import img from "../../assets/images/search/search.png";

function Search() {
  return (
    <form className="search__form">
      <input
        className="search__input"
        type="text"
        placeholder="Пошук"
        onChange={(event) => setValue(event.target.value)}
      />
      <img className="search__icon" src={img} />
    </form>
  );
}

export default Search;

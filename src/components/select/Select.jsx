import React from "react";
import "./_select.scss";

function Select() {
  return (
    <div>
      {/* <label className="select__label" htmlFor='cars'>Сортування:</label> */}
      <select name="cars" id='cars'>
        <option value="null">Інше</option>
        <option value="minPrice">Від дешевих</option>
        <option value="maxPrice">Від дорогих</option>
      </select>
    </div>
  );
}

export default Select;

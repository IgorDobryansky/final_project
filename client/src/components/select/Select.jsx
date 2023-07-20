/* eslint-disable jsx-a11y/label-has-associated-control */

import React from "react";
import "./_select.scss";

const Select = () => (
  <div>
    <label className="select__label" htmlFor="sort">
      Сортування:
    </label>
    <select name="sort" id="sort">
      <option value="null">Інше</option>
      <option value="minPrice">Від дешевих</option>
      <option value="maxPrice">Від дорогих</option>
    </select>
  </div>
);

export default Select;

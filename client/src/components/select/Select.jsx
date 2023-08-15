/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SortingProductsArray } from "../../redux/actions/merchandiseActions";
import "./_select.scss";

const Select = (page) => {
  const [sort, setSort] = useState(null);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    dispatch(SortingProductsArray(page, sort));
  }, [dispatch, sort]);

  return (
    <div>
      <label className="select__label" htmlFor="sort">
        Сортування:
      </label>
      <select name="sort" id="sort" onChange={handleChange}>
        <option value="null">Інше</option>
        <option value="+">Від дешевих</option>
        <option value="-">Від дорогих</option>
      </select>
    </div>
  );
};

export default Select;

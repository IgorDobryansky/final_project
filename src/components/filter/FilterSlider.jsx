// eslint-disable react/destructuring-assignment

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import MuiInput from "@mui/material/Input";
import "./_filterSlider.scss";

const PriceSlider = styled(Slider)(({ theme }) => ({
  color: "#0B3E36",
  height: 15,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  "& .MuiSlider-track": {
    height: 3
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3
  }
}));

const Input = styled(MuiInput)`
  font-family: Mont;
  font-size: 19px;
  font-weight: 600;
  font-style: normal;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-top: 4px;
  width: 76px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #00000061;
`;

function valuetext(value) {
  return `${value} грн`;
}

const FilterSlider = (name) => {
  const [value, setValue] = useState([15, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div className="filter__wrapper">
      <p className="filter__name">{name}</p>
      <Box sx={{ width: 200 }}>
        <PriceSlider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="filter__wrapper-inputs">
        <Input
          value={value[0]}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
        <span className="filter__hyphen">-</span>
        <Input
          value={value[1]}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 10,
            min: 0,
            max: 100,
            type: "number",
            "aria-labelledby": "input-slider"
          }}
        />
      </div>
    </div>
  );
};

export default FilterSlider;

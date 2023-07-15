import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const styleFormLabel = {
  fontFamily: "Mont",
  fontSize: "19px",
  fontWeight: "600",
  fontStyle: "normal",
  color: "black"
};
const styleRadioLabel = {
  ".MuiFormControlLabel-label": {
    fontFamily: "Mont",
    fontSize: "16px",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#515554c5"
  }
};
const styleRadio = { "&.Mui-checked": { color: "#0B3E36" } };

const RadioButtonsFilter = () => (
  <>
    <FormControl
      style={{
        height: "170px",
        width: "200px",
        borderBottom: "1px solid #b3b9b857",
        marginBottom: "18px"
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label" style={styleFormLabel}>
        Бренди
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="lavazza"
          control={<Radio sx={styleRadio} />}
          label="Lavazza"
          sx={{ ...styleRadioLabel }}
        />
        <FormControlLabel
          value="montecelio"
          control={<Radio sx={styleRadio} />}
          label="Montecelio"
          sx={{ ...styleRadioLabel }}
        />
        <FormControlLabel
          value="prima italiano"
          control={<Radio sx={styleRadio} />}
          label="Prima Italiano"
          sx={{ ...styleRadioLabel }}
        />
      </RadioGroup>
    </FormControl>
    <FormControl
      style={{
        height: "170px",
        width: "200px",
        borderBottom: "1px solid #b3b9b857",
        marginBottom: "18px"
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label" style={styleFormLabel}>
        Тип
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel
          value="мелена"
          control={<Radio sx={styleRadio} />}
          label="мелена"
          sx={{ ...styleRadioLabel }}
        />
        <FormControlLabel
          value="в зернах"
          control={<Radio sx={styleRadio} />}
          label="в зернах"
          sx={{ ...styleRadioLabel }}
        />
        <FormControlLabel
          value="розчинна"
          control={<Radio sx={styleRadio} />}
          label="розчинна"
          sx={{ ...styleRadioLabel }}
        />
      </RadioGroup>
    </FormControl>
  </>
);

export default RadioButtonsFilter;

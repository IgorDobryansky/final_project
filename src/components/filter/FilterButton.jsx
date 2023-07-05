import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./_filterButton.scss";

const styleButton = {
  fontFamily: "Mont",
  fontSize: "12px",
  fontWeight: "600",
  fontStyle: "normal",
  color: "#515554c5",
  borderColor: "#b3b9b8c5"
};

const FilterButton = () => (
  <>
    <div className="filter__wrapper-sort">
      <p className="filter__name">Сорт</p>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" style={styleButton}>
          Арабика
        </Button>
        <Button variant="outlined" style={styleButton}>
          Рабуста
        </Button>
      </Stack>
    </div>
    <div className="filter__wrapper-roasting">
      <p className="filter__name">Ступінь обсмажування</p>
      <Stack
        Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        flexWrap="wrap"
      >
        <Button variant="outlined" style={styleButton}>
          середня
        </Button>
        <Button variant="outlined" style={styleButton}>
          темна
        </Button>
        <Button variant="outlined" style={styleButton}>
          світла
        </Button>
        <Button variant="outlined" style={styleButton}>
          дуже темна
        </Button>
        <Button variant="outlined" style={styleButton}>
          світло середня
        </Button>
      </Stack>
    </div>
  </>
);

export default FilterButton;

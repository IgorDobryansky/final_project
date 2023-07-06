import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import check from "../assets/images/thanks/check.png";

const Thanks = () => (
  <div className="wrapper_thanks">
    <img src={check} alt="img" />
    <p>Дякуємо за замовлення</p>
    <p>Ми звяжемось з Вами найближчим часом</p>
    <Link to="/">
      <Button
        style={{
          background:
            "linear-gradient(92.18deg, #5E3928 20.13%, #E4A16F 92.93%)",
          width: "446",
          height: "50",
          color: "white",
          fontFamily: "'Montserrat'"
        }}
        text="Головна"
      >
        {" "}
        Головна
      </Button>
    </Link>
  </div>
);

export default Thanks;

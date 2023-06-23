import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.scss";

const Button = ({ title, width, secondary, onClick }) => (
  <button
    type="button"
    className={classes.Button}
    onClick={onClick}
    style={{
      maxWidth: `${width}px`,
      background: secondary
        ? "rgb(255, 255, 255)"
        : "linear-gradient(92.18deg, #5e3928 20.13%, #e4a16f 92.93%)",
      color: secondary ? "rgb(161, 161, 161)" : "rgb(255, 255, 255)",
      border: secondary ? "1px solid rgb(161, 161, 161)" : "none"
    }}
  >
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  secondary: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  width: "fit-content",
  secondary: false,
  onClick: () => {}
};

export default Button;

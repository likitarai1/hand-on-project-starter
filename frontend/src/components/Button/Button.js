import React from "react";
import classes from "./Button.module.scss";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Button = ({ title }) => {
  return <button className={classes.btn}>{title}</button>;
};

Button.PropTypes = {
  title: PropTypes.string,
};

export default Button;

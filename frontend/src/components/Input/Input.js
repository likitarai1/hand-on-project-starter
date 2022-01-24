import React from "react";
import PropTypes from "prop-types";
import classes from "./Input.module.scss";

const Input = ({ fieldType, fieldId, fieldName, fieldPlaceholder }) => {
  return (
    <input
      id={fieldId}
      name={fieldName}
      type={fieldType}
      placeholder={fieldPlaceholder}
      className={classes.inputField}
    />
  );
};

Input.propTypes = {
  fieldType: PropTypes.string,
  fieldId: PropTypes.string,
  fieldName: PropTypes.string,
  fieldPlaceholder: PropTypes.string,
};

export default Input;

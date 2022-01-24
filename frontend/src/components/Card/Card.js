import React from "react";
import PropTypes from "prop-types";
import classes from "./Card.module.scss";

// eslint-disable-next-line react/prop-types
const Card = ({ APIname, APIdesp, APIimg }) => {
  return (
    <div className={classes.card}>
      <img className={classes.card__img} src={APIimg} alt="API image" />
      <div className={classes.card__content}>
        <h1 className={classes.card__header}>{APIname}</h1>
        {/* eslint-disable-next-line react/prop-types */}
        <p className={classes.card__text}>{APIdesp.slice(0, 60) + `...`}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  APIname: PropTypes.string,
  APIdesp: PropTypes.string,
  APIimg: PropTypes.string,
};

export default Card;

import React from "react";
import classes from "./Banner.module.scss";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className={classes.outerdiv}>
      <div className={classes.purplerect}></div>
      <div className={classes.bgremoveimgdiv}></div>
      <Button title="View App" />
      <div className={classes.bgremovetext}>
        <h1>Background IMAGE Remove</h1>
        <h4>100% automatic and free</h4>
      </div>
    </div>
  );
};

export default Banner;

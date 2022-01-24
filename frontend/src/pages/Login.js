/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import classes from "./css/Login.module.scss";
import LoginImg from "./../utils/images/loginImg.png";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const Login = () => {
  // const [formtype, setFormtype] = useState('login');

  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <img src={LoginImg} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formBox}>
          <form>
            <h1 className={classes.formBox__h1}>Login to your account</h1>
            <Input
              fieldType="email"
              fieldId="email"
              fieldName="email"
              fieldPlaceholder="Email"
            />
            <Input
              fieldType="password"
              fieldId="pass"
              fieldName="pass"
              fieldPlaceholder="Password"
            />
            <Button title="Login Now" />
            <a href="/">Don&apos;t have an account?</a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import classes from "./NavigationHeader.module.css";

const NavigationHeader = () => {
  return (
    <nav className={`${classes["nav-box"]}`}>
      <h1>Budget Application</h1>
      <button className={`${classes["btn-register"]}`}>Register</button>
      <form name="loginForm" action="/performlogin" method="POST">
        <div className={`${classes["login-inputs"]}`}>
          <input
            className={`${classes["login-input"]}`}
            type="text"
            name="username"
            placeholder="Username"
          ></input>
          <input
            className={`${classes["login-input"]}`}
            type="password"
            name="password"
            placeholder="Password"
          ></input>
          <input name="submit-login" type="submit" value="submit" />
        </div>
      </form>
      <input
        className={`${classes["search-bar"]}`}
        type="search"
        placeholder="search"
      ></input>
    </nav>
  );
};

export default NavigationHeader;

import React from "react";
import classes from "./AppBody.module.css";

const AppBody = (props) => {
  return (
    <div className={classes["body-app"]}>
      <div className={classes["body-app-child"]}>{props.children}</div>
    </div>
  );
};

export default AppBody;

import React from "react";
import classes from "./ExpenseTotal.module.css";

const ExpenseTotal = (props) => {
  return (
    <div className={classes["budget-list-total"]}>
      <h3 className={classes["total"]}>Total:</h3>
    </div>
  );
};

export default ExpenseTotal;

import React from "react";
import classes from "./Expense.module.css";

const Expense = (props) => {
  return (
    <div className={classes["budget-list"]}>
      <p>{props.purchaseDate}</p>
      <p>{props.category}</p>
      <p>{`${String.fromCharCode(163)}${props.amount.toFixed(2)}`}</p>
      <p>{props.description}</p>
      <a className={classes["edit-expense-link"]}>
        <button className={classes["edit-expense-btn"]}>Edit</button>
      </a>
      <a className={classes["delete-expense-link"]} href="/delete/expense.id">
        <button className={classes["delete-expense-btn"]}>Delete</button>
      </a>
      <div>
        <input type="checkbox" id="ignore-expense-checkbox" />
      </div>
    </div>
  );
};

export default Expense;

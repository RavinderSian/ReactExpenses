import React from "react";
import Expense from "./Expense";
import classes from "./ExpenseList.module.css";

const DUMMY_EXPENSE = [
  {
    id: 1,
    category: "TEST",
    description: "test",
    amount: 50.0,
    purchaseDate: "2023-01-02",
  },
  {
    id: 2,
    category: "TEST",
    description: "test",
    amount: 60.0,
    purchaseDate: "2023-01-02",
  },
];

const ExpenseList = () => {
  const expensesList = DUMMY_EXPENSE.map((expense) => (
    <Expense key={expense.id} {...expense}></Expense>
  ));
  return <React.Fragment>{expensesList}</React.Fragment>;
};

export default ExpenseList;

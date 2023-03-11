import React from "react";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
import DateFilter from "./Components/DateFilter/DateFilter";
import AppBody from "./Components/AppBody/AppBody";
import ExpenseHeaders from "./Components/Expense/ExpenseHeaders";
import ExpenseList from "./Components/Expense/ExpenseList";

function App() {
  return (
    <React.Fragment>
      <NavigationHeader />
      <AppBody>
        <DateFilter />
        <ExpenseHeaders></ExpenseHeaders>
        <ExpenseList></ExpenseList>
      </AppBody>
    </React.Fragment>
  );
}

export default App;

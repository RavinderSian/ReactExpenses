import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader/NavigationHeader";
import DateFilter from "./Components/DateFilter/DateFilter";
import AppBody from "./Components/AppBody/AppBody";

function App() {
  return (
    <React.Fragment>
      <NavigationHeader />
      <AppBody>
        <DateFilter />
      </AppBody>
    </React.Fragment>
  );
}

export default App;

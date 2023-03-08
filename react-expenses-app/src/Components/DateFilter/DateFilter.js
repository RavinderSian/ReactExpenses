import React from "react";
import classes from "./DateFilter.module.css";

const DateFilter = () => {
  return (
    <div className={`${classes["budget-date-filter"]}`}>
      <div className={`${classes["year-grid"]}`}>
        <div className={`${classes["flex-box-year"]}`}>
          <a className={`${classes["anchor-arrow-back"]}`}>
            <img
              className={`${classes["date-traversal-arrow"]}`}
              src="/images/icons/back-arrow.svg"
              alt="Back arrow for year"
            />
          </a>
          <h3 class="year-text">2019</h3>
          <a class="anchor-arrow-next" th:href="${'/budget/' + nextYear}">
            <img
              class="date-traversal-arrow"
              src="/images/icons/next-arrow.svg"
              alt="Forward arrow for year"
            />
          </a>
        </div>
      </div>
      <div class="flex-box-month">
        <a class="anchor-arrow-back" href="#">
          <img
            id="month-arrow-back"
            src="/images/icons/back-arrow.svg"
            alt="Back arrow for year"
          />
        </a>
        <h4 class="month-text" th:text="${currentMonth}">
          January
        </h4>
        <a class="anchor-arrow-next" th:href="${'/budget/' + nextYear}">
          <img
            id="month-arrow-next"
            src="/images/icons/next-arrow.svg"
            alt="Forward arrow for year"
          />
        </a>
      </div>
    </div>
  );
};

export default DateFilter;

import React from "react";
import "./calculator.css";

export default function Calculator() {
  return (
    <>
      <div className="CalculatorBody">
        <div className="CalculatorHeader">
          <p className="title">Tip Calculator</p>
        </div>

        <div className="inputContainer">
          <div className="billAmount">
            <label htmlFor="bill-amount">Bill Amount</label>
            <input
              type="number"
              id="bill-amount"
              name="bill-amount"
              className="amount"
              value=""
            />
          </div>
          <div className="tipPercent">
            <label htmlFor="tip-percent">Tip Percentage</label>
            <input
              type="number"
              id="tip-percent"
              name="tip-percentage"
              className="tips"
              value=""
            />
          </div>
          <div className="guestNumber">
            <label htmlFor="guestNumber">Number of People</label>
            <input
              type="number"
              id="guestNumber"
              name="guestAmount"
              className="peopleAmount"
              value=""
            />
          </div>
        </div>
        <div className="calculateButton">
          <button type="button" onClick="" className="calButton">
            Calculate
          </button>
        </div>
        <div className="underline"></div>
      </div>
    </>
  );
}

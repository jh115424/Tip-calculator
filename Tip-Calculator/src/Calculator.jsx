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
            <input type="number" id="bill-amount" name="bill-amount" className="amount" value="" />
          </div>
        </div>
      </div>
    </>
  );
}

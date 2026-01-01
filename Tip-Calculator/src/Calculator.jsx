import React, { useState } from "react";
import "./calculator.css";

export default function Calculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  const [tipAmount, setTipAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [perPerson, setPerPerson] = useState(0);

  const calculateHandleClick = () => {
    const calculatedTip =
      (Number(billAmount.toString().replace("$", "")) * Number(tipPercentage)) /
      100;

    const calculatedTotal =
      Number(billAmount.toString().replace("$", "")) + calculatedTip;
    const calculatedPerPerson = calculatedTotal / Number(numberOfPeople);

    setTotalBill(calculatedTotal);
    setPerPerson(calculatedPerPerson);
    setTipAmount(calculatedTip);
  };

  return (
    <>
      <div className="CalculatorBody">
        <div className="CalculatorHeader">
          <p className="title">Tip Calculator</p>
        </div>

        <div className="inputContainer">
          <div className="bills">
            <label htmlFor="bills">Bill Amount</label>
            <input
              type="text"
              id="bill-amount"
              name="bill-amount"
              className="amount"
              value={billAmount ? `$${billAmount}` : ""}
              onChange={(e) => {
                const value = e.target.value.replace("$", "");
                setBillAmount(value);
              }}
              placeholder="$0.00"
            />
          </div>
          <div className="tipPercent">
            <label htmlFor="tip-percent">Tip Percentage</label>
            <input
              type="number"
              id="tip-percent"
              name="tip-percentage"
              className="tips"
              value={tipPercentage}
              onChange={(e) => {
                setTipPercentage(Number(e.target.value));
              }}
            />
          </div>
          <div className="guestNumber">
            <label htmlFor="guestNumber">Number of People</label>
            <input
              type="number"
              id="guestNumber"
              name="guestAmount"
              className="peopleAmount"
              value={numberOfPeople}
              onChange={(e) => {
                setNumberOfPeople(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="calculateButton">
          <button
            type="button"
            onClick={() => calculateHandleClick()}
            className="calButton"
          >
            Calculate
          </button>
        </div>
        <div className="underline"></div>

        <div className="tipResults">
          <p className="tipAmountTitle">
            Tip Amount<span className="highlight">${tipAmount}</span>
          </p>
          <p className="billAmount">
            Total Bill<span className="total">${totalBill}</span>
          </p>
          <p className="eachPerson">
            Per Person<span className="eachGuest">${perPerson}</span>
          </p>
        </div>
      </div>
    </>
  );
}

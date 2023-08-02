"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise8() {
  const [investInfo, setInvestInfo] = React.useState({
    initialCapital: undefined,
    interestRate: undefined,
    investmentTimeMonths: undefined,
  });
  function calcFinalCaptal() {
    const rate = investInfo.interestRate / 100;
    const finalValue =
    investInfo.initialCapital * Math.pow(1 + rate, investInfo.investmentTimeMonths);
    const roundedFinalValue = Math.round(finalValue * 100) / 100;
    return roundedFinalValue;
  }
  return (
    <>
      <label>Initial capital.</label>
      <input
        placeholder="Initial capital."
        type="number"
        className={styles.inputVowel}
        onChange={(e) =>
          setInvestInfo({
            initialCapital: Number(e.target.value),
            interestRate: investInfo.interestRate,
            investmentTimeMonths: investInfo.investmentTimeMonths ,
          })
        }
      />
      <label>Interested Rate.</label>
      <input
        placeholder="Interested Rate."
        type="number"
        className={styles.inputVowel}
        onChange={(e) =>
          setInvestInfo({
            initialCapital: investInfo.initialCapital,
            interestRate:  Number(e.target.value),
            investmentTimeMonths: investInfo.investmentTimeMonths,
          })
        }
      />
      <label>Investment time in months.</label>
      <input
        placeholder="Investment time in months."
        type="number"
        className={styles.inputVowel}
        onChange={(e) =>
          setInvestInfo({
            initialCapital: investInfo.initialCapital,
            interestRate: investInfo.interestRate,
            investmentTimeMonths: Number(e.target.value),
          })
        }
      />
      <h2>{investInfo.initialCapital && investInfo.interestRate && investInfo.investmentTimeMonths?calcFinalCaptal():''}</h2>
      <div>
        <h1>Description:</h1>
        <h2>Interest Calculation</h2>
        <span>
          Create a function that calculates the final value of an investment
          based on initial capital, interest rate, and investment time (in
          months). The program must prompt the user for these values and display
          the final value.
        </span>
      </div>
    </>
  );
}

export default Exercise8;

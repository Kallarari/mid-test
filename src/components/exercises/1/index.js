import React, { useEffect } from "react";
import styles from "./styles.module.css";

function Exercise1() {
  const [display, setDisplay] = React.useState("");
  function calculateResult() {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {      
      setDisplay('ERROR');
    }
  }
  return (
    <>
      <div className={styles.calculator}>
        <input className={styles.input} type="text" id="result" disabled value={display} />
        <br />
        <button className={styles.buttonC} onClick={() => setDisplay('')}>C</button>
        <br />
        <button className={styles.button} onClick={() => setDisplay(display+"7")}>7</button>
        <button className={styles.button} onClick={() => setDisplay(display+"8")}>8</button>
        <button className={styles.button} onClick={() => setDisplay(display+"9")}>9</button>
        <button className={styles.buttonOP} onClick={() => setDisplay(display+"/")}>/</button>
        <br />
        <button className={styles.button} onClick={() => setDisplay(display+"4")}>4</button>
        <button className={styles.button} onClick={() => setDisplay(display+"5")}>5</button>
        <button className={styles.button} onClick={() => setDisplay(display+"6")}>6</button>
        <button className={styles.buttonOP} onClick={() => setDisplay(display+"*")}>*</button>
        <br />
        <button className={styles.button} onClick={() => setDisplay(display+"1")}>1</button>
        <button className={styles.button} onClick={() => setDisplay(display+"2")}>2</button>
        <button className={styles.button} onClick={() => setDisplay(display+"3")}>3</button>
        <button className={styles.buttonOP} onClick={() => setDisplay(display+"-")}>-</button>
        <br />
        <button className={styles.button} onClick={() => setDisplay(display+"0")}>0</button>
        <button className={styles.buttonOP} onClick={() => setDisplay(display+".")}>.</button>
        <button className={styles.buttonOP} onClick={calculateResult}>=</button>
        <button className={styles.buttonOP} onClick={() => setDisplay(display+"+")}>+</button>
      </div>
      <div>
        <h1>Description:</h1>
        <h2>Simple Calculator</h2>
        <span>
          Create a calculator that takes two numbers and an operator (+, -, *,
          /) and returns the result of the operation.
        </span>
      </div>
    </>
  );
}

export default Exercise1;

"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise3() {
  const [message, setMessage] = React.useState();
  function factorialNumber(numero) {
    let fac = 1;
    for (let i = 2; i <= numero; i++) {
      fac *= i;
    }
    setMessage(fac);
  }
  return (
    <>
      <input
        className={styles.inputFac}
        onChange={(e) => {
          factorialNumber(e.target.value);
        }}
        placeholder="Type a number"
        type="number"
      />
      <h2>The factorial of this number is: {message}</h2>
      <div>
        <h1>Description:</h1>
        <h2> Factorial</h2>
        <span>
          Write a function to calculate the factorial of a number. Next, create
          a program that allows the user to enter a number and displays the
          corresponding factorial.
        </span>
      </div>
    </>
  );
}

export default Exercise3;

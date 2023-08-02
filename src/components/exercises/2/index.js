"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise2() {
  const [isPrimeNumber, setIsPrimeNumber] = React.useState();
  function isPrime(number) { 
    if (number <= 1) {
      return false;
    }
    if (number == 2 || number == 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  let firtsTenPrimeNumber = [];
  function handleFirstsPrimeNumbers() {
    for (let j = 0; firtsTenPrimeNumber.length < 19; j += 1) {
      if (isPrime(j)) {
        firtsTenPrimeNumber.push(j);
        firtsTenPrimeNumber.push(" ");
      }
    } 
  }
  handleFirstsPrimeNumbers();
  return (
    <>  <h2>Prime number check:</h2>
        <input
          className={styles.inputPrime}
          onChange={(e) => isPrime(e.target.value)===true?setIsPrimeNumber(true):setIsPrimeNumber(false)}
          placeholder="Type a number"
          type="number"
        />
        <h2>This number {isPrimeNumber?"is":"isn't"} prime.</h2>
        <h3>First 10 prime Numbers:{firtsTenPrimeNumber}</h3>
      <div>
        <h1>Description:</h1>
        <h2>Prime Numbers</h2>
        <span>
          Write a function that checks whether a number is prime or not. Then
          create a program that prints the first 10 prime numbers
        </span>
      </div>
    </>
  );
}

export default Exercise2;
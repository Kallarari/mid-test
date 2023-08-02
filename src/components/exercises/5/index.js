"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise5() {
  const [stringTable, setStringTable] = React.useState([]);
  function displayMultiplicationTable(number) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
      let result = number * i;
      table = [...table, `${number} x ${i} = ${result}`];
    }
    setStringTable(table);
  }
  return (
    <>
      <input
        placeholder="Type a number"
        type="number"
        className={styles.inputTable}
        onChange={(e) => displayMultiplicationTable(e.target.value)}
      />
      <div className={styles.divTable}>
        {stringTable.map((item, key) => {
          return <span key={key}>{item}</span>;
        })}
      </div>
      <div>
        <h1>Description:</h1>
        <h2>Table</h2>
        <span>
          Create a program that receives a number from the user and displays the
          table of that number, from 1 to 10.
        </span>
      </div>
    </>
  );
}

export default Exercise5;

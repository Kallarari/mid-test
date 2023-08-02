"use client";
import React from "react";
import styles from "./styles.module.css";
import Exercise1 from "../exercises/1";
import Exercise2 from "../exercises/2";
import Exercise3 from "../exercises/3";
import Exercise4 from "../exercises/4";
import Exercise5 from "../exercises/5";
import Exercise6 from "../exercises/6";
import Exercise7 from "../exercises/7";
import Exercise8 from "../exercises/8";

function TestSelector() {
  const [itemSelected, setItemSelected] = React.useState(1);
  function handleExercise() {
    switch (itemSelected) {
      case 1:
        return <Exercise1 />;
      case 2:
        return <Exercise2 />;
      case 3:
        return <Exercise3 />;
      case 4:
        return <Exercise4 />;
      case 5:
        return <Exercise5 />;
      case 6:
        return <Exercise6 />;
      case 7:
        return <Exercise7 />;
      case 8:
        return <Exercise8 />;
      default:
        return <h1>Error</h1>;
    }
  }
  return (
    <div className={styles.container}>
      <h1>Exercises:</h1>
      <div className={styles.carrousel}>
        <button
          onClick={() =>
            setItemSelected(itemSelected < 2 ? 7 : itemSelected - 1)
          }
        >
          &lt;
        </button>
        {[...Array(8)].map((_, key) => (
          <div
            key={key}
            className={
              itemSelected === key + 1 ? styles.item : styles.itemActive
            }
            onClick={() => setItemSelected(key + 1)}
          >
            {key + 1}
          </div>
        ))}
        <button
          onClick={() =>
            setItemSelected(itemSelected > 6 ? 1 : itemSelected + 1)
          }
        >
          &gt;
        </button>
      </div>
      {handleExercise()}
    </div>
  );
}

export default TestSelector;

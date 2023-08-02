"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise7() {
  const [grades, setGrades] = React.useState({
    first: undefined,
    second: undefined,
    third: undefined,
  });
  return (
    <>
      <label>First grade</label>
      <input
        placeholder="First grade."
        type="number"
        className={styles.inputGra}
        onChange={(e) =>
          setGrades({
            first: Number(e.target.value),
            second: grades.second,
            third: grades.third,
          })
        }
      />
      <label>Second grade</label>
      <input
        placeholder="Second grade."
        type="number"
        className={styles.inputGra}
        onChange={(e) =>
          setGrades({
            first: grades.first,
            second: Number(e.target.value),
            third: grades.third,
          })
        }
      />
      <label>Third grade</label>
      <input
        placeholder="Third grade."
        type="number"
        className={styles.inputGra}
        onChange={(e) =>
          setGrades({
            first: grades.first,
            second: grades.second,
            third: Number(e.target.value),
          })
        }
      />
      {grades.first && grades.second && grades.third && (
        <h2>
          The average of this istudent is{" "}
          {((grades.first + grades.second + grades.third) / 3).toFixed(1)}
        </h2>
      )}
      <div>
        <h1>Description:</h1>
        <h2>Grade Average</h2>
        <span>
          {`
          Create a program that takes a student's grades in three different
          subjects and calculates the average of the grades. Then display the
          calculated average.`}
        </span>
      </div>
    </>
  );
}

export default Exercise7;

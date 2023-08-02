"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise6() {
  const [vowels, setVowels] = React.useState();
  function countVowels(str) {
    const lowerCaseStr = str.toLowerCase();
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;
    for (let char of lowerCaseStr) {
      if (vowels.has(char)) {
        vowelCount++;
      }
    }
    setVowels(vowelCount);
  }
  return (
    <>
      <input
        placeholder="Type a word"
        type="text"
        className={styles.inputVowel}
        onChange={(e) => countVowels(e.target.value)}
      />
      <h2>This word have {vowels} vowels.</h2>
      <div>
        <h1>Description:</h1>
        <h2>Vowel Counter</h2>
        <span>
          Create a function that counts the number of vowels in a string. The
          program should ask the user for a sentence and display how many vowels
          it has.
        </span>
      </div>
    </>
  );
}

export default Exercise6;

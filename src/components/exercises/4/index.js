"use client";
import React from "react";
import styles from "./styles.module.css";

function Exercise4() {
  const [wordPalindrome, setWordPalindrome] = React.useState(false);
  function isPalindrome(word) {
    const cleanWord = word.toLowerCase().replace(/\s/g, "");
    setWordPalindrome(cleanWord === cleanWord.split("").reverse().join(""));
  }
  return (
    <>
      <input
        className={styles.inputPal}
        onChange={(e) => {
          isPalindrome(e.target.value);
        }}
        placeholder="Type a word"
        type="text"
      />
      <h2>This word {wordPalindrome?"is":"isn't"} an palindrome.</h2>
      <div>
        <h1>Description:</h1>
        <h2>Palindrome</h2>
        <span>
          Create a function that checks whether a word is a palindrome (that is,
          whether it reads the same backwards and forwards). The program must
          ask the user for a word and inform whether or not it is a palindrome.
        </span>
      </div>
    </>
  );
}

export default Exercise4;

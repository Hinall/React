import React from "react";
import styles from "./ButtonContainer.module.css";
// import Button from "./Button";

function ButtonContainer({ handleButton }) {
  let keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    ".",
    "clr",
    "=",
  ];
  return (
    <div className={styles.buttonContainer}>
      {keys.map((names, i) => (
        <button
          key={i}
          className={styles.button}
          onClick={() => handleButton(names)}
        >
          {names}
        </button>
      ))}
    </div>
  );
}

export default ButtonContainer;

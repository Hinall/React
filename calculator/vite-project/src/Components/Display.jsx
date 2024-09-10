import React from "react";
import styles from "./Display.module.css";
function Display({ displayValue }) {
  return (
    <>
      <input
        type="text"
        value={displayValue}
        name=""
        className={styles.display}
        readOnly
      />
    </>
  );
}

export default Display;

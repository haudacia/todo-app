import React from "react";
import styles from "./Button.module.css";

const Button = ({ content, onClick, id }) => {
  return (
    <button className={styles} id={id} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;

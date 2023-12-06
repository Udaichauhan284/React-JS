import React from "react";

import styles from "./Button.module.css";
function Button(props) {
  return (
    <>
    <button onClick={props.onClick} className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
      {props.icon}
      {props.text}
      </button>
    </>
  );
}
export default Button;

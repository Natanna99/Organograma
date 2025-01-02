import React from "react";
import style from "./Button.module.css";

export function Button({ children, ...props }) {
  return (
    <div className={style.containerButton}>
      <button onClick={props.clickSubmit} className={style.buttonForm}>
        {children}
      </button>
    </div>
  );
}

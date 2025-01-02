import React from "react";
import style from "./Input.module.css";

export function Input({
  nameLabel,
  mandatory,
  value,
  setValue,
  palceholder,
  type = "text",
}) {
  return (
    <div className={style.inputText}>
      <label>{nameLabel}</label>
      <input
        onChange={setValue}
        required={mandatory}
        type={type}
        value={value}
        placeholder={palceholder}
      />
    </div>
  );
}

import React from "react";
import style from "./Select.module.css";

export function Select({ label, options, setValue }) {
  return (
    <div className={style.grupSelect}>
      <label>{label}</label>
      <select mandatory={true} onChange={setValue}>
        <option>Selecione</option>
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

import React from "react";
import style from "./Input.module.css";

export function Input({ nameLabel, mandatory, value, setValue }) {
  return (
    <div className={style.inputText}>
      <label>{nameLabel}</label>
      <input
        onChange={setValue}
        required={mandatory}
        type="text"
        value={value}
        placeholder={
          nameLabel !== "Imagem"
            ? `Digite seu ${nameLabel}`
            : `Infome a URL da ${nameLabel} do github`
        }
      />
    </div>
  );
}

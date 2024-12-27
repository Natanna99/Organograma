import React from "react";
import style from "./Card.module.css";

export function Card({ color, name, img }) {
  return (
    <div className={style.collaborators}>
      <div className={`${style.headerCard} ${style[color]}`}>
        <img className={style.imgCard} src={img} alt="Imagem do colaborador" />
      </div>
      <div className={style.footerCard}>
        <h4>{name}</h4>
        <h5>teste</h5>
      </div>
    </div>
  );
}

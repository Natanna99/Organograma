import React from "react";
import style from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Card({
  color,
  name,
  img,
  role,
  deleteCollaborators,
  favoriteCollaborator,
  fav,
}) {
  const isValidUrl = (url) => {
    return url && (url.includes("https") || url.includes("http"));
  };
  const imageDefault =
    "https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg";

  return (
    <div className={style.collaborators}>
      <div className={style.containerClose}>
        <FontAwesomeIcon
          icon="fa-solid fa-xmark"
          onClick={deleteCollaborators}
          className={style.deleteButton}
        />
      </div>

      <div className={style.headerCard} style={{ background: color }}>
        <img
          className={style.imgCard}
          src={isValidUrl(img) ? img : imageDefault}
          alt="colaborador"
        />
      </div>
      <div className={style.footerCard}>
        <h4>{name}</h4>
        <h5>{role}</h5>
        <div className={style.favorite}>
          <FontAwesomeIcon
            onClick={favoriteCollaborator}
            icon={fav ? "fa-solid fa-heart" : "fa-regular fa-heart"}
          />
        </div>
      </div>
    </div>
  );
}

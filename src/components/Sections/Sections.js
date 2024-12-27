import React from "react";
import style from "./Section.module.css";
import { Card } from "../Card/Card";

export function Sections({ nameTime, background, color, listCollaborators }) {
  return (
    <>
      {listCollaborators?.length > 0 && (
        <div className={`${style.section} ${style[background]}`}>
          <h3 className={`${style[color]} ${style.titleSection}`}>
            {nameTime}
          </h3>
          {listCollaborators?.map(
            (collaborator) => (
              console.log(collaborator),
              (
                <Card
                  color={color}
                  name={collaborator?.name}
                  img={collaborator?.image}
                />
              )
            )
          )}
        </div>
      )}
    </>
  );
}

import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import style from "./Form.module.css";
import { v4 as uuidv4 } from "uuid";

export function Form({ setAllCollaborators, times, setTimes }) {
  const [valueCollaborator, setValueCollaborator] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
    id: uuidv4(),
  });
  const [valueTime, setValueTime] = useState({
    id: uuidv4(),
    value: "",
    color: "",
  });

  const submitCollaborator = (e) => {
    e.preventDefault();
    setAllCollaborators(valueCollaborator);
    setValueCollaborator({
      name: "",
      role: "",
      image: "",
      team: "",
      id: uuidv4(),
    });
  };

  const submitTimeColor = (e) => {
    e.preventDefault();
    setTimes(valueTime);
    setValueTime({
      value: "",
      color: "",
      id: uuidv4(),
    });
  };

  return (
    <div className={style.sectionForm}>
      <div className={style.form}>
        <form onSubmit={(e) => submitCollaborator(e)}>
          <h2>Preencha os dados para criar o card do colaborador</h2>
          <Input
            nameLabel={"Nome"}
            palceholder={"Digite seu nome"}
            mandatory={true}
            value={valueCollaborator.name}
            setValue={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Cargo"}
            palceholder={"Digite seu cargo"}
            mandatory={true}
            value={valueCollaborator.role}
            setValue={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                role: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Imagem"}
            palceholder={"Infome a URL da imagem do github"}
            mandatory={true}
            value={valueCollaborator.image}
            setValue={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                image: e.target.value,
              }))
            }
          />
          <Select
            label={"Time"}
            options={times}
            mandatory={true}
            value={valueCollaborator.team}
            setValue={(e) =>
              setValueCollaborator((prev) => ({
                ...prev,
                team: e.target.value,
              }))
            }
          />
          <Button>Enviar</Button>
        </form>
      </div>
      <div className={style.form}>
        <form onSubmit={(e) => submitTimeColor(e)}>
          <h2>Preencha os dados para criar um novo time.</h2>
          <Input
            nameLabel={"Nome do Time"}
            palceholder={"Digite o nome do time"}
            mandatory
            value={valueTime.value}
            setValue={(e) =>
              setValueTime((prev) => ({
                ...prev,
                value: e.target.value,
              }))
            }
          />
          <Input
            nameLabel={"Cor"}
            palceholder={"Escolha a cor do time"}
            mandatory
            type={"color"}
            value={valueTime.color}
            setValue={(e) =>
              setValueTime((prev) => ({
                ...prev,
                color: e.target.value,
              }))
            }
          />

          <Button>Criar um novo time</Button>
        </form>
      </div>
    </div>
  );
}

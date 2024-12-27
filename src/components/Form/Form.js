import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import style from "./Form.module.css";

export function Form({ setAllCollaborators, times }) {
  const [valuesInput, setValuesInput] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllCollaborators(valuesInput);
    setValuesInput({
      name: "",
      role: "",
      image: "",
      team: "",
    });
  };

  return (
    <div className={style.sectionForm}>
      <div className={style.form}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Preencha os dados para criar o card do colaborado</h2>
          <Input
            nameLabel={"Nome"}
            mandatory={true}
            value={valuesInput.name}
            setValue={(e) =>
              setValuesInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <Input
            nameLabel={"Cargo"}
            mandatory={true}
            value={valuesInput.role}
            setValue={(e) =>
              setValuesInput((prev) => ({ ...prev, role: e.target.value }))
            }
          />
          <Input
            nameLabel={"Imagem"}
            mandatory={true}
            value={valuesInput.image}
            setValue={(e) =>
              setValuesInput((prev) => ({ ...prev, image: e.target.value }))
            }
          />
          <Select
            label={"Time"}
            options={times}
            mandatory={true}
            value={valuesInput.team}
            setValue={(e) =>
              setValuesInput((prev) => ({ ...prev, team: e.target.value }))
            }
          />
          <Button>Enviar</Button>
        </form>
      </div>
    </div>
  );
}

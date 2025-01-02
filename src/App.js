import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";
import { Sections } from "./components/Sections/Sections";
import "./font";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), value: "Front-end", color: "#82cffa" },
    { id: uuidv4(), value: "Back-end", color: "#57c278" },
    { id: uuidv4(), value: "Mobile", color: "#ffba05" },
    { id: uuidv4(), value: "DevOps", color: "#e06b69" },
    {
      id: uuidv4(),
      value: "Data Science",
      color: "#a6d157",
    },
  ]);
  const [allCollaborators, setAllCollaborators] = useState([]);

  /**
   * Função que adiciona um novo colaborador
   * @param {Array} collaborator
   */
  const addCollaborator = (collaborator) => {
    setAllCollaborators((prev) => [...prev, collaborator]);
  };

  /**
   * Função que adiciona um novo time
   * @param {string} time
   */
  const addNewTime = (time) => {
    setTimes((prev) => [...prev, time]);
  };

  /**
   * Função que deleta um colaborador
   * @param {string} id
   */
  const deleteCollaborators = (id) => {
    setAllCollaborators((prev) =>
      prev.filter((collaborator) => collaborator?.id !== id)
    );
  };

  /**
   * Função que adiciona um colaborador aos favoritos
   * @param {string} id
   */
  const favoriteCollaborator = (id) => {
    setAllCollaborators((prev) => {
      return prev?.map((collaborator) =>
        collaborator?.id === id
          ? { ...collaborator, fav: !collaborator?.fav }
          : collaborator
      );
    });
  };

  return (
    <div className="App">
      <Banner />
      <Form
        setAllCollaborators={addCollaborator}
        times={times}
        setTimes={addNewTime}
      />
      {times.map((time) => (
        <Sections
          nameTime={time?.value}
          color={time?.color}
          id={time?.id}
          listCollaborators={allCollaborators?.filter(
            (collaborator) => collaborator?.team === time?.value
          )}
          deleteCollaborators={deleteCollaborators}
          setTimes={setTimes}
          favoriteCollaborator={favoriteCollaborator}
        />
      ))}
    </div>
  );
}

export default App;

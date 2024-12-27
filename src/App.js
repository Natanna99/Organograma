import { useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Form } from "./components/Form/Form";
import { Sections } from "./components/Sections/Sections";

function App() {
  const times = [
    { value: "Front-end", background: "frontBackground", color: "frontColor" },
    { value: "Back-end", background: "backBackground", color: "backColor" },
    { value: "Mobile", background: "mobileBackground", color: "mobileColor" },
    { value: "DevOps", background: "devopsBackground", color: "devopsColor" },
    {
      value: "Data Science",
      background: "dataScienceBackground",
      color: "dataScienceColor",
    },
  ];
  const [allCollaborators, setAllCollaborators] = useState([]);

  const addCollaborator = (collaborator) => {
    setAllCollaborators((prev) => [...prev, collaborator]);
  };

  return (
    <div className="App">
      <Banner />
      <Form setAllCollaborators={addCollaborator} times={times} />
      {times.map((time) => (
        <Sections
          nameTime={time?.value}
          background={time?.background}
          color={time?.color}
          image={time?.image}
          listCollaborators={allCollaborators?.filter(
            (collaborator) => collaborator?.team === time?.value
          )}
        />
      ))}
    </div>
  );
}

export default App;

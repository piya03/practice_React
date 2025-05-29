import React, { useContext } from "react";
import { personContext } from "./Counter";
const Person = () => {
  const { name, setName } = useContext(personContext);

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName("Priyanka Nishad")}>Change Name</button>
    </div>
  );
};

export default Person;

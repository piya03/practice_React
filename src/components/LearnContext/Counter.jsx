import React, { createContext, useContext, useState } from "react";
import { learnContext } from "./context";
import { themeContext } from "./ThemeContext";
import Person from "./Person";

export const personContext = createContext({ name: "piya" });

const Counter = () => {
  const { count, setCount } = useContext(learnContext);
  const { darkTheme } = useContext(themeContext);

  const [name, setName] = useState("piya");
  return (
    <personContext.Provider
      value={{
        name,
        setName,
      }}
    >
      <div
        style={{
          background: darkTheme ? "black" : "white",
          color: darkTheme ? "white" : "black",
        }}
      >
        <h1>Count : {count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <Person />
      </div>
    </personContext.Provider>
  );
};

export default Counter;

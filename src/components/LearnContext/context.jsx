import React, { createContext, useState } from "react";

export const learnContext = createContext(null);

export default function TestContextWrapper({ children }) {
  const [count, setCount] = useState(0);
  console.log(count, "count from main");
  return (
    <learnContext.Provider value={{ count, setCount }}>
      {children}
    </learnContext.Provider>
  );
}

import React, { useState, createContext } from "react";

export const themeContext = createContext(null);

export default function ThemContextWrapper({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <themeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </themeContext.Provider>
  );
}

import React, { useContext } from "react";
import { themeContext } from "./ThemeContext";

const Theme = () => {
  const { setDarkTheme } = useContext(themeContext);
  return (
    <div>
      <button onClick={() => setDarkTheme((prev) => !prev)}>toggle mode</button>
    </div>
  );
};

export default Theme;

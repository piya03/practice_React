import React, { useContext } from "react";
import TestContextWrapper from "./context";
import ThemContextWrapper, { themeContext } from "./ThemeContext";
import Counter from "./Counter";
import Theme from "./Theme";
const LearnContext = () => {
  return (
    <ThemContextWrapper>
      <TestContextWrapper>
        <p>LearnContext</p>

        <Theme />
        <Counter />
      </TestContextWrapper>
    </ThemContextWrapper>
  );
};

export default LearnContext;

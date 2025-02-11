import React, { useState, createContext } from "react";
import { FileExplorerData } from "../components/FileExplorerV2/FileExplorerData.jsx";

export const FileExplorerContext = createContext();

const ContextWrapper = ({ children }) => {
  const [data, setData] = useState(FileExplorerData);
  return (
    <FileExplorerContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </FileExplorerContext.Provider>
  );
};

export default ContextWrapper;

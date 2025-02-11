import React, { useState, useContext } from "react";
import { FileExplorerContext } from "../../context/ContextWrapper.jsx";
import "../../App.css";
const FileExplorerV2 = ({ id = 1 }) => {
  console.log("🚀 ~ FileExplorerV2 ~ id:", id);
  const { data } = useContext(FileExplorerContext);
  const [show, setShow] = useState(false);
  console.log("🚀 ~ fileExplorerV2 ~ data:", data);

  return (
    <div className="container">
      <div>
        {data?.[id].type === "folder" ? (show ? "📂" : "📁") : "📄"}
        <span onClick={() => setShow((prev) => !prev)}>
          <span> {data?.[id]?.name}</span>
          <span>➕</span>
          <span>✍🏿</span>
          <span>🗑️</span>
        </span>
      </div>
      {show &&
        data?.[id]?.children?.map((each, i) => {
          return <FileExplorerV2 key={i} id={each} />;
        })}
    </div>
  );
};

export default FileExplorerV2;

import { useState } from "react";
import FileExplorerV2 from "./components/FileExplorerV2";
import ContextWrapper from "./context/ContextWrapper.jsx";
function App() {
  return (
    // basic virsion
    // <div className="container">
    //   <div>
    //     {data?.type === "folder" ? (show ? "📂" : "📁") : "📄"}
    //     <span onClick={() => setShow((prev) => !prev)}>
    //       {" "}
    //       {data?.name} <span>➕</span>
    //       <span>✍🏿</span>
    //       <span>🗑️</span>{" "}
    //     </span>
    //   </div>
    //   {show &&
    //     data?.children?.map((each, i) => {
    //       return <App key={i} data={each} />;
    //     })}
    // </div>

    // here advance version
    <ContextWrapper>
      <FileExplorerV2 />
    </ContextWrapper>
  );
}

export default App;

import { useState } from "react";
import FileExplorerV2 from "./components/FileExplorerV2";
import ContextWrapper from "./context/ContextWrapper.jsx";
import AutoCompleteSearch from "../src/components/AutoCompleteSearch";
import FileExplorerV3 from "./components/FileExplorerV3";
import OTP from "./components/OTP";
import Toaster from "./components/Toaster";
import LearnContext from "./components/LearnContext";

import InfiniteScrollIntersectionObserver from "./components/InfiniteScroll/IntersectionObserver";
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
    <>
      {/* <ContextWrapper>
        <FileExplorerV2 />
      </ContextWrapper>

      <AutoCompleteSearch /> */}
      {/* <FileExplorerV3 /> */}
      {/* <OTP /> */}
      {/* <Toaster /> */}
      {/* <LearnContext /> */}
      <InfiniteScrollIntersectionObserver />
    </>
  );
}

export default App;

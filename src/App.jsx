import { useState } from "react";

import "./App.css";

function App({ data }) {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <div>
        {data?.type === "folder" ? (show ? "📂" : "📁") : "📄"}
        <span onClick={() => setShow((prev) => !prev)}> {data?.name}</span>
      </div>
      {show &&
        data?.children?.map((each, i) => {
          return <App key={i} data={each} />;
        })}
    </div>
  );
}

export default App;

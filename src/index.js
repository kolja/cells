import React from "react";
import ReactDOM from "react-dom";
import Page from "./page/page.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Page rows={24} cols={24} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

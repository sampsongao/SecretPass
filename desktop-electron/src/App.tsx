import React from "react";
import * as ReactDOM from "react-dom";

import "./App.css";
import "antd/dist/antd.css";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

export default App;

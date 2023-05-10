import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FloorContext } from "./context/floorContext";

ReactDOM.render(
  <FloorContext>
      <App />
  </FloorContext>,
  document.getElementById("root")
);

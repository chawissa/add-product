import React from "react";
import { render } from "react-dom";
import "./index.css";
import StoreFront from "./components/StoreFront.js";

function App() {
  return <StoreFront />;
}

render(<App />, document.querySelector("#react-root"));

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Calculator from "./main/Calculator";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
  </div>,
  rootElement
);

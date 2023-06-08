import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./component/Counter.jsx";
import "../styles/index.css";

let counter = 0;

function renderCounter() {
  ReactDOM.render(
    <Counter count={counter} color="#1A120B" />,
    document.querySelector("#app")
  );
  counter++;
}

setInterval(renderCounter, 1000);

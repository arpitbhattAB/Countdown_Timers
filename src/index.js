import React from "react";
import ReactDOM from "react-dom";
import TimerList from "./TimerList";
import "./styles.css";
import Timer from "./Timer";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TimerList />
    <Timer />
  </React.StrictMode>,
  document.getElementById("root")
);

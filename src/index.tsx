import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeHeader from "./HomeHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeTodoList } from "./HomeTodoList";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HomeHeader />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

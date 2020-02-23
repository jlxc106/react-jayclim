import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import Projects from "./Projects";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./Home";
import "./App.css";

function App(props) { 
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./Components/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
    </Switch>
  );
};

export const App = () => {
  return (
    <Router>
      <main>
        <Routes />
      </main>
    </Router>
  );
};

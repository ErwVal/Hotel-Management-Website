import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
    </Switch>
  );
};

export const App: React.FunctionComponent = () => {
  return (
    <Router>
      <main>
        <Routes />
      </main>
    </Router>
  );
};

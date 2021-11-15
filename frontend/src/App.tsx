import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
    </Switch>
  );
};

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Router>
        <main>
          <Container>
            <Routes />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
};

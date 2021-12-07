import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styling/App.scss";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "react-bootstrap";
import { RoomComponent } from "./components/RoomComponent";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/:id/:hotelId/:numGuests/:checkInDate/:checkOutDate" component={RoomComponent} />
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

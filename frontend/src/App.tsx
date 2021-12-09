import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styling/App.scss";
import { BookingForm } from "./components/BookingForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoomComponent } from "./components/RoomComponent";
import { CreateReservation } from "./components/CreateReservation";

const Routes: React.FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/" component={BookingForm} />
      <Route
        exact
        path="/rooms/:id/:hotelId/:numGuests/:checkInDate/:checkOutDate"
        component={RoomComponent}
      />
      <Route exact path="/reservation/create/:id/:hotelId/:numGuests/:checkInDate/:checkOutDate/:location/:roomPrice/:lengthOfStay" component={CreateReservation}/>
    </Switch>
  );
};

export const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Router>
        <main>
          <div>
            <Routes />
          </div>
        </main>
        <Footer />
      </Router>
    </>
  );
};

import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styling/App.scss";
import { BookingForm } from "./components/BookingForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoomComponent } from "./components/RoomComponent";
import { CreateReservation } from "./components/CreateReservation";
import { LandingPage } from "./components/LandingPage";
import { AnimatePresence } from "framer-motion";

export const App: React.FunctionComponent = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={LandingPage} />
          <div>
            <Header />
            <Route exact path="/home" component={BookingForm} />
            <Route
              exact
              path="/rooms/:id/:hotelId/:numGuests/:checkInDate/:checkOutDate"
              component={RoomComponent}
            />
            <Route
              exact
              path="/reservation/create/:id/:hotelIdNumber/:numAdults/:checkInDate/:checkOutDate/:location/:roomPrice/:lengthOfStay"
              component={CreateReservation}
            />
            <Footer />
          </div>
        </Switch>
      </AnimatePresence>
    </>
  );
};

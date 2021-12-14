import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./styling/App.scss";
import { BookingForm } from "./components/BookingForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoomComponent } from "./components/RoomComponent";
import { CreateReservation } from "./components/CreateReservation";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AnimatePresence } from "framer-motion";
import Trip from "./components/Trip";
import Nav from "./components/Nav";

export const App: React.FunctionComponent = () => {
  const location = useLocation();

  const [firstName, setFirstName] = useState("");
  const [ userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setFirstName(content.firstName);
      setUserId(content.id)
      }
    )();
  });

  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={LandingPage} />

          <div>
            <Header firstName={firstName} userId={userId} setFirstName={setFirstName} setUserId={setUserId}/>
            <Route exact path="/login" component={() => <Login setFirstName={setFirstName} setUserId={setUserId}/>}/>
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/home"
              component={() => <BookingForm firstName={firstName} />}
            />
                        <Route
              exact
              path="/trip"
              component={() => <Trip firstName={firstName} userId={userId}/>}
            />
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

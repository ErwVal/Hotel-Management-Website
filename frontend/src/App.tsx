import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./styling/App.scss";

import { BookingForm } from "./components/BookingForm";
import { ChangeReservationForm } from "./components/ChangeReservationForm";
import { Contact } from "./components/Contact";
import { CreateReservation } from "./components/CreateReservation";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import { LoginOrRegister } from "./components/LoginOrRegister";
import { LoginParams } from "./components/LoginParams";
import { Register } from "./components/Register";
import { RegisterParams } from "./components/RegisterParams";
import { RenderAllRooms } from "./components/RenderAllRooms";
import { RoomComponent } from "./components/RoomComponent";
import { Trip } from "./components/Trip";

export interface Reservation {
  checkIn?: Date;
  checkOut?: Date;
  numGuests?: string | number;
  roomId?: string | number;
  hotelId?: string | number;
  guestId?: string | number;
}

export const App: React.FunctionComponent = () => {
  const location = useLocation();

  const [firstName, setFirstName] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setFirstName(content.firstName);
      setUserId(content.id);
    })();
  });

  return (
    <>
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={LandingPage} />

          <div>
            <Header
              firstName={firstName}
              userId={userId}
              setFirstName={setFirstName}
              setUserId={setUserId}
            />
            <Route
              exact
              path="/login"
              component={() => (
                <Login setFirstName={setFirstName} setUserId={setUserId} />
              )}
            />
            <Route
              exact
              path="/login/:roomId/:hotelId/:numGuests/:checkIn/:checkOut"
              component={() => (
                <LoginParams
                  setFirstName={setFirstName}
                  setUserId={setUserId}
                />
              )}
            />
            <Route exact path="/register" component={() => <Register />} />

            <Route
              exact
              path="/register/:roomId/:hotelId/:numGuests/:checkIn/:checkOut"
              component={() => <RegisterParams />}
            />

            <Route
              exact
              path="/login-register/:roomId/:hotelId/:numGuests/:checkIn/:checkOut"
              component={() => <LoginOrRegister />}
            />

            <Route exact path="/home/rooms" component={RenderAllRooms} />

            <Route
              exact
              path="/home"
              component={() => <BookingForm firstName={firstName} />}
            />
            <Route
              exact
              path="/trip"
              component={() => <Trip firstName={firstName} userId={userId} />}
            />

            <Route
              exact
              path="/reservation/change/:roomId/:hotelId/:numGuests/:checkIn/:checkOut/:reservationId/:maxGuests"
              component={() => <ChangeReservationForm userId={userId} />}
            />

            <Route exact path="/contact" component={Contact} />
            <Route
              exact
              path="/rooms/:id/:hotelId/:numGuests/:checkInDate/:checkOutDate"
              component={() => <RoomComponent userId={userId} />}
            />

            <Route
              exact
              path="/reservation/create/:roomId/:hotelId/:numGuests/:checkIn/:checkOut"
              component={() => (
                <CreateReservation firstName={firstName} userId={userId} />
              )}
            />

            <Footer />
          </div>
        </Switch>
      </AnimatePresence>
    </>
  );
};

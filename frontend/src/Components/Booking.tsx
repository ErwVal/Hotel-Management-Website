import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  return (
    <div className='app'>
      <h3 className="text-center">Check in</h3>
      <div className="calendar-container">
        <Calendar onChange={setCheckIn} value={checkIn} />
      </div>
      <h3 className="text-center">Check out</h3>
      <div className="calendar-container">
        <Calendar onChange={setCheckOut} value={checkOut} />
      </div>
    </div>
  );
};

export default Booking;

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface Props {
  checkInCheckOutString: String
}

export const Booking = ({checkInCheckOutString}: Props) => {

  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h3 className="text-center">{checkInCheckOutString}</h3>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  )
};

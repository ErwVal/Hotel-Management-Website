import { useState } from "react";
import moment from "moment";
import Moment from 'react-moment';

interface BookingProps {
  checkInCheckOutString: String
}

export const Booking: React.FunctionComponent<BookingProps> = ({checkInCheckOutString}: BookingProps) => {

  const [date, setDate] = useState(new Date());

  return (
<></>
  )
};

using System;
using System.Collections.Generic;

namespace Database.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime ReservationCheckIn { get; set; }
        public DateTime ReservationCheckOut { get; set; }
        public string ReservationGuestName { get; set; }
        public int ReservationNumGuests { get; set; }
        public List<Room> ReservationHotels { get; set; }
        public List<Room> ReservationRooms { get; set; }
    }
}
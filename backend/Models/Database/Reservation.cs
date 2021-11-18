using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace App.Database.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime ReservationCheckIn { get; set; }
        public DateTime ReservationCheckOut { get; set; }
        public string ReservationGuestName { get; set; }
        public int ReservationNumGuests { get; set; }
         [JsonIgnore]
        public List<Room> ReservationHotels { get; set; }
         [JsonIgnore]
        public List<Room> ReservationRooms { get; set; }
    }
}
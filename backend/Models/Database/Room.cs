using System;
using System.Collections.Generic;

namespace Database.Models
{
    public class Room
    {
        public int Id { get; set; }
        public List<string> RoomImages { get; set; }
        public double RoomPrice { get; set; }
        public int RoomMaxGuests { get; set; }
        public List<Hotel> RoomHotels { get; set; }

    }
}
using System;
using System.Collections.Generic;

namespace Database.Models
{
    public class Hotel 
    {
        public int Id { get; set; }
        public string HotelName { get; set; }
        public string HotelAddress { get; set; }
        public List<Room> HotelRooms { get; set; }
    }
}
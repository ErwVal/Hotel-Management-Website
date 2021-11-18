using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
namespace Database.Models
{
    public class Hotel 
    {
        public int Id { get; set; }
        public string HotelName { get; set; }
        public string HotelAddress { get; set; }
         [JsonIgnore]
        public List<Room> HotelRooms { get; set; }
    }
}
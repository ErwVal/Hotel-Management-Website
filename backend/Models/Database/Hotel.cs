using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
namespace react_typescript_dotnet_app.Models.Database
{
    public class Hotel 
    {
        public int Id { get; set; }
        public string HotelName { get; set; }
        public string Address { get; set; }
         [JsonIgnore]
        public virtual List<Room> Rooms { get; set; }
        [JsonIgnore]
        public virtual List<Reservation> Reservations { get; set; }
    }
}
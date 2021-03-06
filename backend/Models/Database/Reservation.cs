using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace react_typescript_dotnet_app.Models.Database
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public int NumGuests { get; set; }

        [JsonIgnore]
        public virtual List<Room> BookedRooms { get; set; } = new List<Room>();
        [JsonIgnore]
        public virtual int HotelId { get; set; }
    }
}
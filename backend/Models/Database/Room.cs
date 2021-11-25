using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace react_typescript_dotnet_app.Models.Database
{
    public enum RoomType { Single, Double, Twin, Suite }
    public enum Available { No, Yes }
    public class Room
    {
        public int Id { get; set; }
        public RoomType RoomType { get; set; }
        public Available Available { get; set; }
        public List<string> Images { get; set; }
        public double RoomPrice { get; set; }
        public int MaxGuests { get; set; }
        public int HotelId { get; set; }

    }
}
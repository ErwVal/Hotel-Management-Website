using System;
using System.Collections.Generic;
using react_typescript_dotnet_app.Models.Database;

namespace react_typescript_dotnet_app.Models.Request
{
    public class CreateReservationRequest
    {
        public int Id { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public string GuestName { get; set; }
        public int NumGuests { get; set; }
        public int RoomId { get; set; }
        public int HotelId { get; set; }
    }
}
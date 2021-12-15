using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Controllers;
using System.Collections.Generic;
using System.Linq;
using System;

namespace react_typescript_dotnet_app.Models.Response
{
    public class ReservationResponse
    {
        public int Id { get; set; }
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
        public string GuestName { get; set; }
        public int NumGuests { get; set; }
        public virtual List<Room> BookedRooms { get; set; } = new List<Room> ();

        public ReservationResponse(Reservation reservation)
        {
            Id = reservation.Id;
            CheckIn = reservation.CheckIn;
            CheckOut = reservation.CheckOut;
            NumGuests = reservation.NumGuests;
            BookedRooms.AddRange(reservation.BookedRooms);
        }
    }
}
using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System;

namespace react_typescript_dotnet_app.Models.Response
{
    public class UpdateDatesResponse
    {
        private readonly Reservation _reservation;

        public UpdateDatesResponse(Reservation reservation)
        {
            _reservation = reservation;
        }

        public int Id => _reservation.Id;
        public DateTime CheckIn => _reservation.CheckIn;
        public DateTime CheckOut => _reservation.CheckOut;
        public int NumGuests => _reservation.NumGuests;
        public List<Room> BookedRooms => _reservation.BookedRooms;
        public int HotelId => _reservation.HotelId;
    }
}
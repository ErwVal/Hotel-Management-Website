using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Models.Request;
using System.Linq;
using System.Collections.Generic;


namespace react_typescript_dotnet_app.Services
{
    public interface IReservationService
    {
        Reservation Create(CreateReservationRequest reservation);
        List<Reservation> GetReservationsList();

    }

    public class ReservationService : IReservationService
    {

        private readonly IReservationRepo _reservations;
        private readonly IRoomsRepo _rooms;
        public ReservationService(IReservationRepo reservations, IRoomsRepo rooms)
        {
            _reservations = reservations;
            _rooms = rooms;
        }

        public Reservation Create(CreateReservationRequest reservation)
        {

            var roomsList = _rooms.GetRoomsList();
            var rooms = roomsList
              .Where(r => r.Id == reservation.RoomId)
              .Single();

            var reservationResult = new Reservation
            {

                CheckIn = reservation.CheckIn,
                CheckOut = reservation.CheckOut,
                NumGuests = reservation.NumGuests,
                BookedRooms = { rooms },
                HotelId = reservation.HotelId
                
            };

            return _reservations.AddReservation(reservationResult);
        }

        public List<Reservation> GetReservationsList()
        {
            return _reservations.GetReservationsList();
        }
    }
}
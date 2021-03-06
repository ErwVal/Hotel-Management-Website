using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Models.Request;
using System.Linq;
using System.Collections.Generic;
using System;


namespace react_typescript_dotnet_app.Services
{
    public interface IReservationService
    {
        Reservation Create(CreateReservationRequest reservation);
        List<Reservation> GetReservationsList();
        List<Reservation> GetUserReservations(int id);

    }

    public class ReservationService : IReservationService
    {

        private readonly IReservationRepo _reservations;
        private readonly IRoomsRepo _rooms;
        private readonly IUsersRepo _users;
        public ReservationService(IReservationRepo reservations, IRoomsRepo rooms, IUsersRepo users)
        {
            _reservations = reservations;
            _rooms = rooms;
            _users = users;
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
                HotelId = reservation.HotelId,
            };

            // var room = _rooms.GetRoomById(rooms.Id);
            // rooms.Reservations.Add(reservationResult);

            var user = _users.GetUserById(reservation.UserId);
            user.Reservations.Add(reservationResult);
            return _reservations.AddReservation(reservationResult);
        }

        public List<Reservation> GetUserReservations(int id)
        {
            var userReservationList = _users.GetUserById(id).Reservations;

            var reservations = _reservations.GetReservationsList().Where(r =>  userReservationList.Contains(r)).ToList();

            return reservations;
        }

        public List<Reservation> GetReservationsList()
        {
            return _reservations.GetReservationsList();
        }
    }
}
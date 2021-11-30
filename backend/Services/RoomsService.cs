using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System;

namespace react_typescript_dotnet_app.Services
{
    public interface IRoomsService
    {
        List<Room> GetRoomsList();
        Room GetRoomById(int id);
        List<Room> GetAvailableRoomsList(DateTime arrival, DateTime departure);
    }

    public class RoomsService : IRoomsService
    {
        private readonly IRoomsRepo _rooms;
        private readonly IReservationRepo _reservations;

        public RoomsService(IRoomsRepo rooms, IReservationRepo reservations)
        {
            _rooms = rooms;
            _reservations = reservations;
        }

        public List<Room> GetRoomsList()
        {
            return _rooms.GetRoomsList();
        }

        public Room GetRoomById(int id)
        {
            return _rooms.GetRoomById(id);
        }

        public List<Room> GetAvailableRoomsList(DateTime arrival, DateTime departure)
        {
            return _rooms.GetRoomsList()
            .Where( r => r.Reservations.All(r => r.CheckOut < arrival || r.CheckIn > departure)).ToList();          
        }
    }
}
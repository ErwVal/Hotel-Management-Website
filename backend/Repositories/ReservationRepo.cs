using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IReservationRepo
    {
        Reservation AddReservation(Reservation reservation);
        List<Reservation> GetReservationsList();
    }

    public class ReservationRepo : IReservationRepo
    {
        private readonly DatabaseDBContext _database;

        public ReservationRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public Reservation AddReservation(Reservation reservation)
        {
            var result = _database.Reservations.Add(reservation);
            _database.SaveChanges();
            return result.Entity;
        }

        public List<Reservation> GetReservationsList()
        {
            return _database.Reservations
            .Include(r => r.BookedRooms)
            .ToList();
        }

    }
}
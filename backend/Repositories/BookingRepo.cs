using react_typescript_dotnet_app.Database.Models;
using System.Collections.Generic;
using System.Linq;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IBookingRepo
    {
        List<Reservation> GetReservations();
    }

    public class BookingRepo : IBookingRepo
    {
        private readonly DatabaseDBContext _database;

        public BookingRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public List<Reservation> GetReservations()
        {
            return _database.Reservations.ToList();
        }
    }   
}
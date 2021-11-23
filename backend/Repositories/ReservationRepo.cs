using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System.Linq;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IReservationRepo
    {
        List<Reservation> GetReservations();
    }

    public class ReservationRepo : IReservationRepo
    {
        private readonly DatabaseDBContext _database;

        public ReservationRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public List<Reservation> GetReservations()
        {
            return _database.Reservations.ToList();
        }
    }   
}
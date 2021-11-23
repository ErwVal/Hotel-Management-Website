using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using System.Linq;
using System.Collections.Generic;


namespace react_typescript_dotnet_app.Services
{
    public interface IReservationService
    {
        List<Reservation> GetReservations();
    }

    public class ReservationService : IReservationService
    {

        private readonly IReservationRepo _reservations;        
        public ReservationService(IReservationRepo reservations)
        {
            _reservations = reservations;
        }

        public List<Reservation> GetReservations()
        {
            return _reservations.GetReservations();
        }
    }
}
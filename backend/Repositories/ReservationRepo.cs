using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Request;
using react_typescript_dotnet_app.Models.Response;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IReservationRepo
    {
        Reservation AddReservation(Reservation reservation);
        List<Reservation> GetReservationsList();

        Reservation GetReservationById(int id);

        void DeleteReservation(Reservation reservation);
        Reservation UpdateDates(int id, UpdateDatesRequest update);
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

        public Reservation GetReservationById(int id)
        {
            return _database.Reservations
            .Include(r => r.BookedRooms)
            .Where(r => r.Id == id)
            .Single();
        }

        public void DeleteReservation(Reservation reservation)
        {
            _database.Reservations.Remove(reservation);
            _database.SaveChanges();
        }

        public Reservation UpdateDates(int id, UpdateDatesRequest update)
        {
            var reservation = GetReservationById(id);
            reservation.CheckIn = update.CheckIn;
            reservation.CheckOut = update.CheckOut;

            _database.Reservations.Update(reservation);
            _database.SaveChanges();

            return reservation;

        }


    }
}
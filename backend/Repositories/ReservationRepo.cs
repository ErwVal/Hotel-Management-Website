using react_typescript_dotnet_app.Models.Database;
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
        void ChangeCheckInDate(Reservation reservation, DateTime newCheckInDate);
        void ChangeCheckOutDate(Reservation reservation, DateTime newCheckOutDate);
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

        public void ChangeCheckInDate(Reservation reservation, DateTime newCheckInDate)
        {
            // checking the new date is not before today and also before the check out date
            if (newCheckInDate <= DateTime.Today && newCheckInDate > reservation.CheckOut)
            {
                reservation.CheckIn = newCheckInDate;
                _database.Reservations.Update(reservation);
                _database.SaveChanges();
            }
        }

        public void ChangeCheckOutDate(Reservation reservation, DateTime newCheckOutDate)
        {
            // Checking the check out date is after the check in date
            if (newCheckOutDate < reservation.CheckIn)
            {
                reservation.CheckOut = newCheckOutDate;
                _database.Reservations.Update(reservation);
                _database.SaveChanges();
            }
        }

    }
}
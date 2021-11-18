using System;
using Microsoft.EntityFrameworkCore;
using react_typescript_dotnet_app.Database.Models;
using Npgsql;

namespace react_typescript_dotnet_app
{
    public class DatabaseDBContext : DbContext
    {
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

    }
}
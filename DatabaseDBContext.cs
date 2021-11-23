using System;
using Microsoft.EntityFrameworkCore;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using Npgsql;

namespace react_typescript_dotnet_app
{
    public class DatabaseDBContext : DbContext
    {
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

                protected override void OnConfiguring(
            DbContextOptionsBuilder optionsBuilder
        )
        {
            optionsBuilder.UseNpgsql("Host=localhost;Database=hotelDB;Username=postgres;Password=Xq4Y0f1fdoP6Hr");
        }
    }
}
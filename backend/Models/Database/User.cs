using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
namespace react_typescript_dotnet_app.Models.Database
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }
        public byte[] Salt { get; set; }
        [JsonIgnore]
        public virtual List<Reservation> Reservations { get; set; } = new List<Reservation>();
    }
}
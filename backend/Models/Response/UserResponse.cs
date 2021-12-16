using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Controllers;
using System.Collections.Generic;
using System.Linq;
using System;

namespace react_typescript_dotnet_app.Models.Response
{
    public class UserResponse
    {

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public List<Reservation> Reservations { get; set; } = new List<Reservation>();

        public UserResponse(User user)
        {
            Id = user.Id;
            FirstName = user.FirstName;
            LastName = user.LastName;
            Email = user.Email;
            Reservations.AddRange(user.Reservations);
        }
    }
}
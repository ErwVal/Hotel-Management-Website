using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System;

namespace react_typescript_dotnet_app.Services
{
    public interface IUsersService
    {
        List<User> GetUsersList();
        User GetUserById(int id);
    }

    public class UsersService : IUsersService
    {
        private readonly IRoomsRepo _rooms;
        private readonly IReservationRepo _reservations;
        private readonly IUsersRepo _users;

        public UsersService(IRoomsRepo rooms, IReservationRepo reservations, IUsersRepo users)
        {
            _rooms = rooms;
            _reservations = reservations;
            _users = users;
        }

        public List<User> GetUsersList()
        {
            return _users.GetUsersList();
        }

        public User GetUserById(int id)
        {
            return _users.GetUserById(id);
        }  
    }
}
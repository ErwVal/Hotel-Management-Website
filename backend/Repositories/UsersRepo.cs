using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IUsersRepo
    {
        List<User> GetUsersList();
        User GetUserById(int id);
    }

    public class UsersRepo : IUsersRepo
    {
        private readonly DatabaseDBContext _database;

        public UsersRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public List<User> GetUsersList()
        {
            return _database.Users
            .Include(u => u.Reservations)
            .ToList();
        }

        public User GetUserById(int id)
        {
            return _database.Users.Include(u => u.Reservations).Where(u => u.Id == id).Single();
        }
    }
}
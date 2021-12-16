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
        User Create(User user);
        User GetUserByEmail(string email);
        
    }

    public class UsersRepo : IUsersRepo
    {
        private readonly DatabaseDBContext _database;

        public UsersRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public User Create(User user)
        {
             _database.Users.Add(user);
             user.Id =_database.SaveChanges();
             
             return user;
        }

        public User GetUserByEmail(string email)
        {
            return _database.Users.FirstOrDefault(u => u.Email == email);
        }

        public List<User> GetUsersList()
        {
            return _database.Users
            .Include(u => u.Reservations)
            .ThenInclude(r => r.BookedRooms)
            .ToList();
        }

        public User GetUserById(int id)
        {
            return _database.Users.Include(u => u.Reservations).Where(u => u.Id == id).Single();
        }
    }
}
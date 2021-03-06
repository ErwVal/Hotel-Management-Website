using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IRoomsRepo
    {
        List<Room> GetRoomsList();
        Room GetRoomById(int id);
    }

    public class RoomsRepo : IRoomsRepo
    {
        private readonly DatabaseDBContext _database;

        public RoomsRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public List<Room> GetRoomsList()
        {
            return _database.Rooms
            .Include(r => r.Reservations)
            .ToList();
        }

        public Room GetRoomById(int id)
        {
            return _database.Rooms.Include(r => r.Reservations).Where(r => r.Id == id).Single();
        }
    }
}
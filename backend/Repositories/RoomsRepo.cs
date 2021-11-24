using react_typescript_dotnet_app.Models.Database;
using System.Collections.Generic;
using System.Linq;

namespace react_typescript_dotnet_app.Repositories
{
    public interface IRoomsRepo
    {
        List<Room> GetRoomsList();
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
            return _database.Rooms.ToList();
        }
    }
}
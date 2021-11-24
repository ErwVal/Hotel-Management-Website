using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using System.Linq;
using System.Collections.Generic;


namespace react_typescript_dotnet_app.Services
{
    public interface IRoomsService
    {
        List<Room> GetRoomsList();
    }

    public class RoomsService : IRoomsService
    {
        private readonly IRoomsRepo _rooms;

        public RoomsService(IRoomsRepo rooms)
        {
            _rooms = rooms;
        }

        public List<Room> GetRoomsList()
        {
            return _rooms.GetRoomsList();
        }
    }
}
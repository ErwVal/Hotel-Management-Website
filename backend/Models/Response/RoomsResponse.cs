using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Database.Models;
using react_typescript_dotnet_app.Controllers;
using System.Collections.Generic;
using System.Linq;

namespace react_typescript_dotnet_app.Models.Response
{
    public class RoomsResponse
    {
        public int Id { get; set; }
        public RoomType RoomType { get; set; }
        public List<string> Images { get; set; }
        public double RoomPrice { get; set; }
        public int MaxGuests { get; set; }

        public RoomsResponse(Room room)
        {
            Id = room.Id;
            RoomType = room.RoomType;
            Images = room.Images;
            RoomPrice = room.RoomPrice;
            MaxGuests = room.MaxGuests;

        }
    }
}
using react_typescript_dotnet_app.Database.Models;
using System.Collections.Generic;

namespace react_typescript_dotnet_app.Models.Response
{
    public class RoomsListResponse
    {
        public List<RoomsResponse> Rooms { get; set; }
    }
}
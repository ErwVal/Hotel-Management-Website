
using System.Collections.Generic;
using react_typescript_dotnet_app.Models.Database;

namespace react_typescript_dotnet_app.Models.Response
{
    public class ReservationListResponse
    {
        public List<ReservationResponse> Reservations { get ; set; }
    }
}
using System;

namespace react_typescript_dotnet_app.Models.Request
{
    public class UpdateDatesRequest
    {
        public DateTime CheckIn { get; set; }
        public DateTime CheckOut { get; set; }
    }
}
using System;
using System.Collections.Generic;
using react_typescript_dotnet_app.Models.Database;

namespace react_typescript_dotnet_app.Models.Request
{
    public class CreateContactQueryRequest
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }
}
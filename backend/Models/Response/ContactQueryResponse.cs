using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Controllers;
using System.Collections.Generic;
using System.Linq;
using System;

namespace react_typescript_dotnet_app.Models.Response
{
    public class ContactQueryResponse
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }

        public ContactQueryResponse(ContactQuery contactQuery)
        {
            FirstName = contactQuery.FirstName;
            LastName = contactQuery.LastName;
            Email = contactQuery.Email;
            Message = contactQuery.Message;
        }
    }
}
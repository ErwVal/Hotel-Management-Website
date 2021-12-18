using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Models.Request;
using System.Linq;
using System.Collections.Generic;
using System;


namespace react_typescript_dotnet_app.Services
{
    public interface IContactQueryService
    {
        List<ContactQuery> GetContactQueries();
        ContactQuery Create(CreateContactQueryRequest contactQueryRequest);
    }

    public class ContactQueryService : IContactQueryService
    {

        private readonly IContactQueryRepo _contactQueries;
        private readonly IUsersRepo _users;
        public ContactQueryService(IContactQueryRepo contactQueries, IUsersRepo users)
        {
            _contactQueries = contactQueries;
            _users = users;
        }


        public List<ContactQuery> GetContactQueries()
        {
            return _contactQueries.GetContactQueries();
        }

        public ContactQuery Create(CreateContactQueryRequest contactQueryRequest)
        {


            var contactQueryResult = new ContactQuery
            {
                FirstName = contactQueryRequest.FirstName,
                LastName = contactQueryRequest.LastName,
                Email = contactQueryRequest.Email,
                Message = contactQueryRequest.Message,

            };


            return _contactQueries.Create(contactQueryResult);
        }
    }
}
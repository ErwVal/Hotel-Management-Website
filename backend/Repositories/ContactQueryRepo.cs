using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Request;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;


namespace react_typescript_dotnet_app.Repositories
{
    public interface IContactQueryRepo
    {
        ContactQuery Create(ContactQuery contactQuery);
         List<ContactQuery> GetContactQueries();
         ContactQuery GetContactQueryById(int id);
         void DeleteContactQuery(ContactQuery contactQuery);
        
    }

    public class ContactQueryRepo : IContactQueryRepo
    {
        private readonly DatabaseDBContext _database;

        public ContactQueryRepo(DatabaseDBContext database)
        {
            _database = database;
        }

        public ContactQuery Create(ContactQuery contactQuery)
        {
            var result = _database.ContactQueries.Add(contactQuery);
            _database.SaveChanges();
            return result.Entity;
        }

        public List<ContactQuery> GetContactQueries()
        {
            return _database.ContactQueries
            .ToList();
        }

        public ContactQuery GetContactQueryById(int id)
        {
            return _database.ContactQueries
            .Where(q => q.Id == id)
            .Single();
        }

        public void DeleteContactQuery(ContactQuery contactQuery)
        {
            _database.ContactQueries.Remove(contactQuery);
            _database.SaveChanges();
        }

    }

}

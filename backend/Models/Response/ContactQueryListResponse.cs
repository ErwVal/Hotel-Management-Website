
using System.Collections.Generic;
using react_typescript_dotnet_app.Models.Database;

namespace react_typescript_dotnet_app.Models.Response
{
    public class ContactQueryListResponse
    {
        public List<ContactQueryResponse> ContactQueries { get ; set; }
    }
}
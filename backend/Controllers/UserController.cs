using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using react_typescript_dotnet_app.Models.Request;
using Microsoft.IdentityModel.Tokens;
using react_typescript_dotnet_app.Dtos;
using System.Linq;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using System;

namespace react_typescript_dotnet_app.Controllers
{
    [Route("trip")]
    [ApiController]
    public class UserController : Controller
    {

        private readonly IUsersRepo _users;
        public UserController(IUsersRepo users)
        {
            _users = users;
        }

        ///<summary>
        /// Retrieves the user from the database that matches the Id.
        ///</summary>
        [HttpGet("{id}")]

        public ActionResult<UserResponse> GetUserById([FromRoute] int id)
        {
            User user = _users.GetUserById(id);
            return new UserResponse(user);
        }


        ///<summary>
        /// Gets the list of users from the database.
        ///</summary>
        [HttpGet]
        public ActionResult<UsersListResponse> GetUsersList()
        {
            return new UsersListResponse
            {
                Users = _users
                .GetUsersList()
                .Select(s => new UserResponse(s))
                .ToList()
            };
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using react_typescript_dotnet_app.Models.Request;
using System.Linq;
using System.Collections.Generic;

namespace react_typescript_dotnet_app.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly IUsersRepo _repository;

        public AuthController(IUsersRepo repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register()
        {
            return Ok("Success!");
        }
    }

}
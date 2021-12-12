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
    [Route("")]
    [ApiController]
    public class AuthController : Controller
    {

        [HttpGet]
        public IActionResult Hello()
        {
            return Ok("Success wuhuu!");
        }
    }

}
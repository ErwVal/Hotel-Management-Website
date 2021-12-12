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

namespace react_typescript_dotnet_app.Controllers
{
    [Route("api")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly IUsersRepo _repository;
        private readonly JtwService _jwtService;

        public AuthController(IUsersRepo repository, JtwService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto dto)
        {
            var user = new User
            {
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Email = dto.Email,
                HashedPassword= BCrypt.Net.BCrypt.HashPassword(dto.Password)
            };

            return Created("Success", _repository.Create(user));
        }

        [HttpPost("login")]
        public IActionResult Login(LoginDto dto) // dto = data tansfer object, similar to request model
        {
            var user = _repository.GetUserByEmail(dto.Email);
            if(user == null)
            {
                return BadRequest(new{message = "Invalid credentials"});
            }

            if(!BCrypt.Net.BCrypt.Verify(dto.Password, user.HashedPassword))
            {
                return BadRequest(new{message = "Invalid credentials"});
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true // Frontend can only get it and sent it. Only backend can modify it or access it.
            });

            return Ok( new {
                message = "success"
            });
        }
        
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Database.Models;
using react_typescript_dotnet_app.Models.Response;
using System.Linq;
using System.Collections.Generic;

namespace react_typescript_dotnet_app.Controllers
{
    [ApiController]
    [Route("/rooms")]

    public class RoomsController : ControllerBase
    {
            private readonly ILogger<RoomsController> _logger;
            private readonly IRoomsRepo _roomsRepo;
            private readonly IRoomsService _roomsService;

            public RoomsController(ILogger<RoomsController> logger, IRoomsRepo roomsRepo, IRoomsService roomsService)
            {
                _logger = logger;
                _roomsRepo = roomsRepo;
                _roomsService = roomsService;
            }

               ///<summary>
    /// Gets the list of rooms from the database.
    ///</summary>
    [HttpGet]
    public ActionResult<RoomsListResponse> GetRooms()
    {
      return new RoomsListResponse
      {
        Rooms = _roomsService
          .GetRooms()
          .Select(s => new RoomsResponse(s))
          .ToList()
      };
    }
  }
}
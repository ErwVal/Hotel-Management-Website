using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using System.Linq;
using System.Collections.Generic;
using System;

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
        public ActionResult<RoomsListResponse> GetRoomsList()
        {
            return new RoomsListResponse
            {
                Rooms = _roomsService
                .GetRoomsList()
                .Select(s => new RoomsResponse(s))
                .ToList()
            };
        }

        ///<summary>
        /// Gets the list of rooms from the database which satisfy the query.
        ///</summary>
        [HttpGet("by-query")]

        public ActionResult<RoomsListResponse> byQuery(
           [FromQuery] string location,
           [FromQuery] DateTime checkInDate,
           [FromQuery] DateTime checkOutDate,
           [FromQuery] int numGuests
       )
        {
            return new RoomsListResponse
            {
                Rooms = _roomsService
                .GetRoomsList()
                .Where(r =>
                r.Available == Available.Yes &&
                numGuests <= r.MaxGuests)
          .Select(r => new RoomsResponse(r))
                .ToList()
            };
        }
    }
}
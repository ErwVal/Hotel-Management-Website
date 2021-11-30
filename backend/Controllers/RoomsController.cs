using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using System.Linq;
using System.Collections.Generic;
using System;
using Microsoft.EntityFrameworkCore;

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
        /// Retrieves the room from the database that matches the Id.
        ///</summary>
        [HttpGet("{id}")]

        public ActionResult<RoomsResponse> GetRoomById( [FromRoute] int id)
        {
            Room room = _roomsService.GetRoomById(id);
            return new RoomsResponse(room);
        }

        ///<summary>
        /// Gets the list of rooms from the database which satisfy the query.
        ///</summary>
        [HttpGet("search")]

        public ActionResult<RoomsListResponse> Search(
           [FromQuery] int hotelId,
           [FromQuery] int numGuests,
           [FromQuery] string checkInDate,
           [FromQuery] string checkOutDate
        
       )
        {
            return new RoomsListResponse
            {
                Rooms = _roomsService
                .GetAvailableRoomsList(DateTime.Parse(checkInDate), DateTime.Parse(checkOutDate))
                .Select(r => new RoomsResponse(r))
                .Where(r => r.MaxGuests >= numGuests && r.HotelId == hotelId)
                .ToList()
            };
        }
    }
}
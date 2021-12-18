using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using react_typescript_dotnet_app.Repositories;
using react_typescript_dotnet_app.Services;
using react_typescript_dotnet_app.Models.Database;
using react_typescript_dotnet_app.Models.Response;
using react_typescript_dotnet_app.Models.Request;
using System.Linq;
using System.Collections.Generic;
using System;

namespace react_typescript_dotnet_app.Controllers
{
    [ApiController]
    [Route("/api/reservations")]
    public class ReservationsController : ControllerBase
    {
        private readonly ILogger<ReservationsController> _logger;
        private readonly IReservationRepo _reservationRepo;
        private readonly IReservationService _reservationService;

        public ReservationsController(ILogger<ReservationsController> logger, IReservationRepo reservationRepo, IReservationService reservationService)
        {
            _logger = logger;
            _reservationRepo = reservationRepo;
            _reservationService = reservationService;
        }

        ///<summary>
        /// Gets the list of reservations from the database.
        ///</summary>
        [HttpGet]
        public ActionResult<ReservationListResponse> GetReservationsList()
        {
            return new ReservationListResponse
            {
                Reservations = _reservationService
                .GetReservationsList()
                .Select(r => new ReservationResponse(r))
                .ToList()
            };
        }

        ///<summary>
        /// Gets the  reservations from the database that matches the Id
        ///</summary>
        [HttpGet("{id}")]
        public ActionResult<ReservationResponse> GetReservationById(int id)
        {
            var reservation = _reservationRepo.GetReservationById(id);
            return new ReservationResponse(reservation);

        }

        ///<summary>
        /// Deletes the  reservations from the database that matches the Id
        ///</summary>
        [HttpDelete("{id}")]
        public ActionResult DeleteReservation([FromRoute] int id)
        {

            var reservation = _reservationRepo.GetReservationById(id);
            _reservationRepo.DeleteReservation(reservation);
            return Ok();
        }

        ///<summary>
        /// Updates the arrival and departure dates of the reservation with matching id
        ///</summary>
        [HttpPatch("{id}/update")]
        public ActionResult<UpdateDatesResponse> UpdateDates([FromRoute] int id, [FromBody] UpdateDatesRequest update)
        {

            var reservation =_reservationRepo.UpdateDates(id, update);
            return new UpdateDatesResponse(reservation);
        }

        ///<summary>
        /// Gets the list of reservations of a specific user from the database.
        ///</summary>
        [HttpGet("user/{id}")]
        public ActionResult<ReservationListResponse> GetUserReservations([FromRoute] int id)
        {
            return new ReservationListResponse
            {
                Reservations = _reservationService
                .GetUserReservations(id)
                .Select(r => new ReservationResponse(r))
                .ToList()
            };
        }


        ///<summary>
        /// Creates a new reservation 
        ///</summary>
        [HttpPost("create")]
        public IActionResult Create([FromBody] CreateReservationRequest newReservation)
        {
            Reservation reservation = _reservationService.Create(newReservation);

            var url = Url.Action("GetById", new { id = reservation.Id });
            var reservationResponse = new ReservationResponse(reservation);
            return Created(url, reservationResponse);
        }
    }
}
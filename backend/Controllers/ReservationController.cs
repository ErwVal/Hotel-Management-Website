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
        [HttpPatch("/update/{id}/{newCheckInDate}//{newCheckOutDate}")]
        public ActionResult UpdateDates([FromRoute] int id, DateTime newCheckInDate, DateTime newCheckOutDate)
        {

            var reservation = _reservationRepo.GetReservationById(id);
            _reservationRepo.UpdateDates(reservation, newCheckInDate, newCheckOutDate);
            return NoContent();
        }


        ///<summary>
        /// Updates the check in date of the reservation with matching id
        ///</summary>
        [HttpPatch("/arrival/{id}/{newCheckInDate}")]
        public ActionResult UpdateCheckInDate([FromRoute] int id, DateTime newCheckInDate)
        {

            var reservation = _reservationRepo.GetReservationById(id);
            _reservationRepo.ChangeCheckInDate(reservation, newCheckInDate);
            return NoContent();
        }

        ///<summary>
        /// Updates the check out date of the reservation with matching id
        ///</summary>
        [HttpPatch("/departure/{id}")]
        public ActionResult UpdateCheckOutDate([FromRoute] int id, DateTime newCheckOutDate)
        {

            var reservation = _reservationRepo.GetReservationById(id);
            _reservationRepo.ChangeCheckOutDate(reservation, newCheckOutDate);
            return NoContent();
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
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
    [Route("/booking")]
    public class BookingController : ControllerBase
    {
        private readonly ILogger<BookingController> _logger;
        private readonly IBookingRepo _bookingRepo;
        private readonly IBookingService _bookingService;

        public BookingController(ILogger<BookingController> logger, IBookingRepo bookingRepo, IBookingService bookingService)
        {
            _logger = logger;
            _bookingRepo = bookingRepo;
            _bookingService = bookingService;
        }

        [HttpGet]
        public ActionResult<BookingListResponse> GetBookings()
        {
            return new BookingListResponse
            {
                Bookings = _bookingService.GetBookings
                .Select(booking => new BookingResponse(booking))
                .ToList()
            }
        }

    }
}
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
    [Route("/api/contact")]
    public class ContactQueryController : ControllerBase
    {
        private readonly ILogger<ContactQueryController> _logger;
        private readonly IContactQueryRepo _contactQueriesRepo;
        private readonly IContactQueryService _contactQueriesService;

        public ContactQueryController(ILogger<ContactQueryController> logger, IContactQueryRepo contactQueryRepo, IContactQueryService contactQueryService)
        {
            _logger = logger;
            _contactQueriesRepo = contactQueryRepo;
            _contactQueriesService = contactQueryService;
        }

        ///<summary>
        /// Gets the list of contact queries from the database.
        ///</summary>
        [HttpGet]
        public ActionResult<ContactQueryListResponse> GetContactQueries()
        {
            return new ContactQueryListResponse
            {
                ContactQueries = _contactQueriesService
                .GetContactQueries()
                .Select(q => new ContactQueryResponse(q))
                .ToList()
            };
        }


        ///<summary>
        /// Creates a new contact query 
        ///</summary>
        [HttpPost("create")]
        public IActionResult Create([FromBody] CreateContactQueryRequest newContactQuery)
        {
            ContactQuery contactQuery = _contactQueriesService.Create(newContactQuery);

            var url = Url.Action("GetById", new { id = contactQuery.Id });
            var contactQueryResponse = new ContactQueryResponse(contactQuery);
            return Created(url, contactQueryResponse);
        }
    }
}
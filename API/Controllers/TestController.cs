using System;
using API.DTOs;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class TestController : BaseApiController
{
    [HttpGet("Unauthorized")]
    public IActionResult GetUnauthorized()
    {
        return Unauthorized("You are not authorized to access this resource");
    }

    [HttpGet("NotFound")]
    public IActionResult GetNotFound()
    {
        return NotFound("Resource not found");
    }

    [HttpGet("BadRequest")]
    public IActionResult GetBadRequest()
    {
        return BadRequest("Bad request");
    }

    [HttpGet("ServerError")]
    public IActionResult GetServerError()
    {
        return StatusCode(500, "Internal server error");
    }

    [HttpGet("InternalError")]
    public IActionResult GetInternalError()
    {
        throw new Exception("This is an unhandled exception");
    }

    [HttpPost("ValidationError")]
    public IActionResult GetValidationError(CreateProductDTO product)
    {
        return Ok();
    }
    
}

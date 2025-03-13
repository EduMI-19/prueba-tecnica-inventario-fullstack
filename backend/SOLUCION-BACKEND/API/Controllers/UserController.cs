using Application.Services;
using Domain.Models.User;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid user data.");
            }

            var user = await _userService.CreateUserAsync(model.Name, model.Email, model.Password);
            if (user == null)
            {
                return BadRequest("User could not be created.");
            }

            return Ok(user);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] UserModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid user data.");
            }

            var user = await _userService.UpdateUserAsync(id, model.Name, model.Email, model.Password);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] UserLoginModel model)
        {
            if (model == null)
            {
                return BadRequest("Invalid login data.");
            }

            var user = await _userService.LoginAsync(model.Email, model.Password);
            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok(user);
        }
    }


}
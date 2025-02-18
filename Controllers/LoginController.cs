using Microsoft.AspNetCore.Mvc;
using Tienda.CrossCutting.Dtos.Usuarios;
using Tienda.Bussiness.Helpers;
using Tienda.Bussiness.Interfaces;
using Tienda.CrossCutting.Model;

namespace TiendaApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginBussiness _loginService;
        public LoginController(ILoginBussiness loginService)
        {

            _loginService = loginService;



        }
        [HttpPost("Autenticarse")]
        public async Task<ActionResult<ResponseModel<string>>> Autenticarse([FromBody] LoginDTO login)
        {
            login.Password = Encript.EncriptPass(login.Password);
            var response = await _loginService.Login(login);
            return response;
        }

        [HttpPost("CrearUsuario")]
        public async Task<ActionResult<ResponseModel<string>>> CrearUsuario([FromBody] CrearUsuarioDto login)
        {
            login.Password = Encript.EncriptPass(login.Password);
            var response = await _loginService.Crear(login);
            return response;
        }
    }
}

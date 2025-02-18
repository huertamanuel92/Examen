using Microsoft.AspNetCore.Mvc;
using Tienda.Bussiness.Helpers;
using Tienda.Bussiness.Interfaces;
using Tienda.CrossCutting.Dtos.Tienda;
using Tienda.CrossCutting.Dtos.Usuarios;
using Tienda.CrossCutting.Model;

namespace TiendaApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TiendaController : ControllerBase
    {
        private readonly ITiendaBussiness _tiendaBussiness;
        public TiendaController(ITiendaBussiness tiendaBussiness)
        {

            _tiendaBussiness = tiendaBussiness;



        }

        [HttpPost("CrearTienda")]
        public async Task<ActionResult<ResponseModel<string>>> CrearTienda([FromBody] TiendaDto tienda)
        {
            var response = await _tiendaBussiness.CrearTienda(tienda);
            return response;
        }


        [HttpGet("ConsultarTienda")]
        public async Task<ActionResult<List<ConsultarTiendaDto>>> ConsultarTienda()
        {
            var response = await _tiendaBussiness.ConsultarTienda();
            return response;
        }
    }
}

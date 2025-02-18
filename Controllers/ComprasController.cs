using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Tienda.Bussiness.Interfaces;
using Tienda.CrossCutting.Dtos.Compras;
using Tienda.CrossCutting.Dtos.Tienda;
using Tienda.CrossCutting.Model;

namespace TiendaApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ComprasController : Controller
    {
        private readonly IComprasBussiness _comprasBussiness;
        public ComprasController(IComprasBussiness comprasBussiness)
        {

            _comprasBussiness = comprasBussiness;



        }

        [HttpPost("CompraArticulos")]
        public async Task<ActionResult<ResponseModel<string>>> CompraArticulos([FromBody] List<CompraDto> compra)
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            string user = string.Empty;
            if (identity != null)
            {
                IEnumerable<Claim> claims = identity.Claims;
                // or
                user = identity.FindFirst("user").Value;

            }
            var response = await _comprasBussiness.CompraArticulos(compra, user);
            return response;
        }
    }
}

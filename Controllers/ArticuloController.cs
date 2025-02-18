using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using Tienda.Bussiness.Interfaces;
using Tienda.CrossCutting.Dtos;
using Tienda.CrossCutting.Dtos.Articulos;
using Tienda.CrossCutting.Dtos.Tienda;
using Tienda.CrossCutting.Model;

namespace TiendaApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticuloController : ControllerBase
    {
        private readonly IArticuloBussiness _articuloBussiness;
        public ArticuloController(IArticuloBussiness articuloBussiness)
        {

            _articuloBussiness = articuloBussiness;



        }

        [HttpPost("CrearArticulo")]
        public async Task<ActionResult<ResponseModel<string>>> CrearArticulo([FromForm] ArticuloDto articulo)
        {
            var file = Request.Form.Files[0];
            var folderName = Path.Combine("Resources", "Images");
            var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
            ArticuloDto model = new ArticuloDto();
            foreach (var key in Request.Form.Keys)
            {
                model = JsonConvert.DeserializeObject<ArticuloDto>(Request.Form[key]);
                

            }
            var response = await _articuloBussiness.CrearArticulo(model, file, Directory.GetCurrentDirectory());
            return response;
        }

        [HttpGet("ConsultarArticulos")]
        public async Task<ActionResult<List<ConsultarArticulosDto>>> ConsultarArticulos()
        {
            var response = await _articuloBussiness.ConsultarArticulos(Directory.GetCurrentDirectory());
            return response;
        }

        //[HttpGet("obtenerImagen")]
        //public async Task<ActionResult<List<ConsultarArticulosDto>>> ObtenerImagen(string ruta)
        //{
        //    var response = await _articuloBussiness.ConsultarArticulos();
        //    return response;
        //}
    }
}

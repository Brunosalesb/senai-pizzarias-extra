using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pizzaria_API.Domains;

namespace Pizzaria_API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PizzariasController : Controller
    {
        [Authorize]
        [HttpGet]
        public IActionResult ListarPizzarias()
        {
            try
            {
                using (PizzariaContext ctx = new PizzariaContext())
                {
                    return Ok(ctx.Pizzarias.Include(x => x.IdCategoriaNavigation).ToList());
                }
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

        [Authorize(Roles = "Administrador")]
        [HttpPost]
        public IActionResult CadastrarPizzaria(Pizzarias pizzaria)
        {
            try
            {
                using (PizzariaContext ctx = new PizzariaContext())
                {
                    ctx.Pizzarias.Add(pizzaria);
                    ctx.SaveChanges();
                }
                return Ok();
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
    }
}
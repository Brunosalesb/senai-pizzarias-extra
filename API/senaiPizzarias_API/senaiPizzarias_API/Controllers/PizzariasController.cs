using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using senaiPizzarias_API.Domains;

namespace senaiPizzarias_API.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PizzariasController : Controller
    {
        [HttpGet]
        public IActionResult ListarPizzarias()
        {
            try
            {
                using (PizzariaContext ctx = new PizzariaContext())
                {
                    return Ok(ctx.Pizzarias.ToList());
                }
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }

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
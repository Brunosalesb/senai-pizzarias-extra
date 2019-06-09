using Microsoft.EntityFrameworkCore;
using Pizzaria_API.Domains;
using Pizzaria_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzaria_API.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        public Usuarios BuscarPorEmailESenha(string email, string senha)
        {
            using (PizzariaContext ctx = new PizzariaContext())
            {
                Usuarios usuarioBuscado = ctx.Usuarios.Include(x => x.IdTipoUsuarioNavigation).FirstOrDefault(x => x.Email == email && x.Senha == senha);
                if (usuarioBuscado == null)
                {
                    return null;
                }
                return usuarioBuscado;
            }
        }
    }
}

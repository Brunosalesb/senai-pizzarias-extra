using Pizzaria_API.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Pizzaria_API.Interfaces
{
    interface IUsuarioRepository
    {
        Usuarios BuscarPorEmailESenha(string email, string senha);
    }
}

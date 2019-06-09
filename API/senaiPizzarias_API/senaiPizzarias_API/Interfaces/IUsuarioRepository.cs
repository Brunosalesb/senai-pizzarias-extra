using senaiPizzarias_API.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senaiPizzarias_API.Interfaces
{
    interface IUsuarioRepository 
    {
        Usuarios BuscarPorEmailESenha(string email, string senha);
    }
}

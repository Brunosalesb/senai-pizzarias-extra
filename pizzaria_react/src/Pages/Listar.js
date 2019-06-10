import React, { Component } from 'react';
import logo from '../Assets/Img/logo.jpg';
import '../Assets/css/Listar.css';

class Listar extends Component {

    constructor() {
        super();
        this.state = {
            lista: []
        }
    }

    buscarPizzarias() {
        let token = localStorage.getItem("pizza-token");
        fetch('http://localhost:5000/api/Pizzarias', {
            method: 'GET',
            headers : {
                'Authorization': 'Bearer ' + token
              }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState(({ lista: data })))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarPizzarias();
    }

    render() {
        return (
            <nav>
                <div>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                        crossOrigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                        crossOrigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                        crossOrigin="anonymous"></script>
                </div>

                <div className="barra-up"></div>
                <div className="container-fluid">
                    <img src={logo} className="logo"  alt="logo"></img>
                </div>
                <h2 id="h2" className="text-center">Lista de pizzarias</h2>

                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Pizzaria</th>
                            <th>Endereço</th>
                            <th>Telefone</th>
                            <th>Vegano</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.lista.map(function (pizzaria) {
                                return (
                                    <tr key={pizzaria.id}>
                                        <td>{pizzaria.nome}</td>
                                        <td>{pizzaria.endereco}</td>
                                        <td>{pizzaria.telefone}</td>
                                        <td>{pizzaria.vegano.toString() === "true" ? "Sim" : "Não"}</td>
                                        <td>{pizzaria.idCategoriaNavigation.nome}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <div id="footerListar"></div>
            </nav>

        );
    }
}
export default Listar;
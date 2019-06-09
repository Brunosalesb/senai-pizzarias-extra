import React, { Component } from 'react';
import '../Assets/css/App.css';
import Axios from 'axios';
import logo from '../Assets/Img/logo.jpg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: ''
    }
  }

  atualizaEstadoEmail(event) {
    this.setState({ email: event.target.value });
  }
  atualizaEstadoSenha(event) {
    this.setState({ senha: event.target.value });
  }

  efetuaLogin(event) {
    event.preventDefault();
    Axios.post('http://localhost:5000/api/login', {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(data => {
        localStorage.setItem("pizza-token", data.data.token);
        this.props.history.push('/pizzarias/listar');
        console.log(data);
      })
      .catch(erro => {
        console.log(erro);
        alert("Não foi possível conectar");
      })
  }

  render() {
    return (
      <nav>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
        <div className="barra-up"></div>
        <img src={logo} id="logo" className="rounded mx-auto d-block" alt="logo"></img>

        <form onSubmit={this.efetuaLogin.bind(this)}>
          <div className="text-center" id="login">

            <div className="form-group">
              <input type="email" value={this.state.email} onChange={this.atualizaEstadoEmail.bind(this)} className="form-control" id="email" placeholder="Email"></input>
            </div>

            <div className="form-group">
              <input type="password" value={this.state.senha} onChange={this.atualizaEstadoSenha.bind(this)} className="form-control" id="senha" placeholder="Senha"></input>
            </div>
            <button type="submit" id="botao" className="btn btn-secondary">Entrar</button>

          </div>
        </form>

        <div id="footer"></div>
      </nav>
    )
  }
}

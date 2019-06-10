import React from 'react';
import ReactDOM from 'react-dom';
import App from './Pages/App.js';
import Listar from './Pages/Listar';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {usuarioAutenticado} from './Services/auth';


const Permissao = ({component : Component}) => (
    <Route
    render = {props => usuarioAutenticado() ?
        (<Component {...props} />) :
        (<Redirect to={{pathname :  '/',state : {from : props.location}}}/>)
    }
    />
);

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Permissao exact path="/pizzarias/listar" component={Listar} />
            </Switch>
        </div>
    </Router>
)
ReactDOM.render(rotas, document.getElementById('root'));
serviceWorker.unregister();

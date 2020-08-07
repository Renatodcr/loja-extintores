import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PaginaHome from './pages/PaginaHome';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Extintores from './pages/Produtos';


const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ PaginaHome } />
            <Route path='/contato' component={ Contato } />
            <Route path='/extintores' component={ Extintores } />
            <Route path='/empresa' component={ Empresa } />
        </Switch>
    </BrowserRouter>
);

export default Rotas;
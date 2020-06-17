import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Funcionarios from '../pages/Funcionarios';
import Projetos from '../pages/Projetos';
import Vereadores from '../pages/Vereadores';
import oneFuncionario from '../pages/Details/details';
import pesquisaTag from '../pages/pesquisaNome';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/funcionarios" exact component={Funcionarios} />
      <Route path="/projetos" exact component={Projetos} />
      <Route path="/vereadores" exact component={Vereadores} />
      <Route path="/funcionarios/:nome" exact component={oneFuncionario} />
      <Route path="/funcionariosN/:nome" exact component={pesquisaTag} />
    </Switch>
  );
}
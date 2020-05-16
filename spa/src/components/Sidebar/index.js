import React from 'react';

import { Container, SidebarLink } from './styles';

function Sidebar() {
  return (
    <Container>    
      <SidebarLink to="/">Pesquisar</SidebarLink>
      <SidebarLink to="/funcionarios">Funcionários Públicos</SidebarLink>
      <SidebarLink to="/projetos">Projetos</SidebarLink>
      <SidebarLink to="/vereadores">Vereadores e Prefeito</SidebarLink>
    </Container>
    
  );

}

export default Sidebar;
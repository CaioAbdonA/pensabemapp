import React from 'react';

import { Container, SidebarLink, Logo } from './styles';

function Sidebar() {
  return (
    <Container>    
      <Logo />
      <SidebarLink to="/">Pesquisas Rápidas</SidebarLink>
      <SidebarLink to="/funcionarios">Funcionários Públicos</SidebarLink>
      <SidebarLink to="/projetos">Projetos</SidebarLink>
      <SidebarLink to="/vereadores">Vereadores e Prefeito</SidebarLink>
      <SidebarLink to="/">Sobre</SidebarLink>
    </Container>
    
  );

}

export default Sidebar;
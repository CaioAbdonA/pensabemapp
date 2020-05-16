import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Fundo from './components/fundo';
import Routes from './routes';

import GlobalStyle, { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <Fundo />
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
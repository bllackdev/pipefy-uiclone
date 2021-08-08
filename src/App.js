import React from 'react';

import Header from '../src/components/Header/index';
import Board from '../src/components/Board/index';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
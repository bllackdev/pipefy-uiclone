import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import Header from '../src/components/Header/index';
import Board from '../src/components/Board/index';

import GlobalStyle from './styles/global';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
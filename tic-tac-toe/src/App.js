import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import BoardContextProvider from './context/BoardContextProvider'

function App() {
  return (
    <div className="App">
      <BoardContextProvider>
        <Game />
      </BoardContextProvider>
    </div>
  );
}

export default App;

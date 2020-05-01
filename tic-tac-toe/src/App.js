import React, {useState} from 'react';
import './App.css';
import BoardContextProvider from './contexts/BoardContextProvider';
import Game from './Game';

function App() {
  return (
		<div>
			<h1 className='header'>Tic-Tac-Toe</h1>
      <BoardContextProvider>
			   <Game />
      </BoardContextProvider>
		</div>
	)
}

export default App;

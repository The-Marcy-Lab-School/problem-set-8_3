import React from 'react';
import './App.css';
// import {BoardContext} from './contexts/BoardContext';
// import PlayerTurns from './contexts/PlayerTurns';
import Game from './Game';

function App() {
  return (
		<div>
			<h1 className='header'>Tic-Tac-Toe</h1>
			<Game />
		</div>
	)
}

export default App;

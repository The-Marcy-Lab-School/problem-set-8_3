import React, {useState, useContext} from 'react';
import Board from './Board';
import BoardContext from './contexts/BoardContext';

const Game = () => {
  const { turn } = useContext(BoardContext);

  return (
    <div>
        <h2 className='header'>Player {turn}, it's your turn</h2>
        <Board />
    </div>
  );
}

export default Game;

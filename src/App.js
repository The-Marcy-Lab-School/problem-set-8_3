import React, { useState } from 'react';
import GameContext from './context/GameContext';
import NoughtsCrosses from './components/NoughtsCrosses';

function App() {
  /**
   * Don't mind deep rerenders at this level, mind premature optimization
   */
  const [game, setGame] = useState({
    isXNext: true,
    board: [null, null, null, null, null, null, null, null, null],
    winner: ''
  });
  return (
    <div>
      <GameContext.Provider value={{ game, setGame }}>
        <NoughtsCrosses />
      </GameContext.Provider>
    </div>
  );
}

export default App;

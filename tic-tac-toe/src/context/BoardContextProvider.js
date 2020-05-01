import React, { useState } from 'react';
import BoardContext from './BoardContext';

const BoardContextProvider = ({ children }) => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const value = {
    board,
    setBoard,
    turn,
    setTurn
  };

  return (
    <BoardContext.Provider value={value}>
    {children}
    </BoardContext.Provider>
  );

};

export default BoardContextProvider;

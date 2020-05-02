import React, { useState } from 'react';
import BoardContext from './contexts/BoardContext';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [mark, setMark] = useState('X');
  const [winner, setWinner] = useState(null);

  const getWinner = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const marks = combo.map((position) => board[position])
      if (marks.every((mark) => mark === 'X') ||
          marks.every((mark) => mark === 'O')) {
        return marks[0];
      }
    }

    return null;
  };

  const handleClick = (squareNumber) => {
    setBoard((oldBoard) => {
      const newBoard = [...oldBoard];
      newBoard[squareNumber] = mark;
      return newBoard;
    });

    setMark((oldMark) => oldMark === 'X' ? 'O' : 'X');

    setWinner(() => getWinner());

    console.log({ mark, board, winner });
  };
  
  return (
    <BoardContext.Provider value={{board, handleClick}}>
      <div>
        { winner ? <h1>{winner} Wins!</h1> : ''}
        <div className="board">
          { board.map((_, index) => <Square id={index} />) }
        </div>
      </div>
    </BoardContext.Provider>
  );
}

export default Board;
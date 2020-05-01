import React, { useContext } from 'react';
import GameContext from '../context/GameContext';
import { Col } from 'reactstrap';

function Cell({ index }) {
  const { game, setGame } = useContext(GameContext);
  const { board, isXNext } = game;
  function checkWinner() {
    const cells = board;
    if (cells[0] !== null && cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }

    if (cells[3] !== null && cells[3] === cells[4] && cells[4] === cells[5]) {
      return cells[3];
    }

    if (cells[6] !== null && cells[6] === cells[7] && cells[7] === cells[8]) {
      return cells[6];
    }

    // diagonal wins
    if (cells[0] !== null && cells[0] === cells[4] && cells[4] === cells[8]) {
      return cells[0];
    }

    if (cells[2] !== null && cells[2] === cells[4] && cells[4] === cells[6]) {
      return cells[2];
    }
    // vertical wins
    if (cells[0] !== null && cells[0] === cells[3] && cells[3] === cells[6]) {
      return cells[0];
    }

    if (cells[1] !== null && cells[1] === cells[4] && cells[4] === cells[7]) {
      return cells[1];
    }

    if (cells[2] !== null && cells[2] === cells[5] && cells[5] === cells[8]) {
      return cells[2];
    }
  }
  const handleClick = i => {
    const winner = checkWinner();
    if (winner) {
      setGame({
        ...game,
        winner: winner
      });
      return;
    }
    const newBoard = [...board];
    newBoard[i] = isXNext ? 'X' : 'O';
    setGame({ ...game, board: newBoard, isXNext: !isXNext });
  };
  return (
    <Col className="game-cell" onClick={() => handleClick(index)}>
      {(index, board[index] ? board[index] : '...')}
    </Col>
  );
  // take data from context, use it with useState, use setFn to update it and trigger rerender
}

export default Cell;

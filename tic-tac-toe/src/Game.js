import React, { useContext, useState } from 'react';
import Cells from './Cell';
import BoardContext from './context/BoardContext';
import TurnContext from './context/TurnContext';
console.log('BoardContext', BoardContext);
// console.log('TurnContext', TurnContext);

function Board(props) {
  // const [boardState, setBoardState] = useState(new Array(9).fill(null));

  const boardContext = useContext(BoardContext);
  const updateBoardContext = useContext(BoardContext);
  console.log('boardContext', boardContext.board);
  console.log('setBoardState', updateBoardContext.setBoardState);
  let turn = useContext(TurnContext);

  function declareWinner(board) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board);
        console.log(`The winner is player ${board[a]}`);
        return board[a];
      }
    }
    return null;

  }
  const winner = declareWinner(boardContext.board);
  let status;
  if (winner) {
    status = `The winner is ${winner}`;
  }

  function clickHandler(num) {
    // whenever someone clicks a button, they apply a sate to that specific button
    // we can set this state into the boardState and then check if there's a winner
    if (!winner || boardContext.board[num]) {
      boardContext.board[num] = turn;
      console.log(boardContext);
      if (turn === 'X') {
        turn = 'O';
      }
      else {
        turn = 'X';
      }
      // props.setTurn((props.turn === 'X') ? 'O' : 'X');
    }
    updateBoardContext.setBoardState(boardContext.board);
    console.log('i have been clicked', turn)
  }

  return (
    <div className="board">
      <h3>{status}</h3>
      <BoardContext.Provider value={boardContext.board}>
      <div className="row">
        <Cells click={() => clickHandler(0)} value={boardContext.board[0]}/>
        <Cells click={() => clickHandler(1)} value={boardContext.board[1]}/>
        <Cells click={() => clickHandler(2)} value={boardContext.board[2]}/>
      </div>
      
      <div className="row">
        <Cells click={() => clickHandler(3)} value={boardContext.board[3]}/>
        <Cells click={() => clickHandler(4)} value={boardContext.board[4]}/>
        <Cells click={() => clickHandler(5)} value={boardContext.board[5]}/>
      </div>
      
      <div className="row">
        <Cells click={() => clickHandler(6)} value={boardContext.board[6]}/>
        <Cells click={() => clickHandler(7)} value={boardContext.board[7]}/>
        <Cells click={() => clickHandler(8)} value={boardContext.board[8]}/>
      </div>
      </BoardContext.Provider>
    </div>

  );
}

function Game() {
  const turn = useContext(TurnContext);
  return (
    <div>
    <TurnContext.Provider value={turn}>
      <h1>Player {turn}, it's your turn</h1>
      <Board turn={turn}/>
    </TurnContext.Provider>
    </div>
  );
}

export default Game;

import React, {useContext} from 'react';
import Square from './Square';
import BoardState from './contexts/BoardContext';

const Board = () => {
  const {turn, setTurn, boardState, setBoardState} = useContext(BoardState);

  const declareWinner = (states) => {
    const conditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < conditions.length; i++) {
      const [first, second, third] = conditions[i];
      if (states[first] && states[first] === states[second] && states[first] === states[third]) {
        return states[first];
      }
    }
    return null;
  }

  const winner = declareWinner(boardState);
  let status;
  if (winner) {
    status = `The winner is ${winner}!`;
  }

  function handleClick(num) {
    if (!declareWinner(boardState) && !boardState[num]) {
      const updatedBoard = [...boardState];
      updatedBoard[num] = turn;
      setBoardState(updatedBoard);
      setTurn((turn === 'O') ? 'X' : 'O');
    }
  }

  return (
    <div className='board'>
      <h3>{status}</h3>
      <div className='row'>
        <Square clickEvent={() => handleClick(0)} value={boardState[0]}/>
        <Square clickEvent={() => handleClick(1)} value={boardState[1]}/>
        <Square clickEvent={() => handleClick(2)} value={boardState[2]}/>
      </div>
      <div className='row'>
        <Square clickEvent={() => handleClick(3)} value={boardState[3]}/>
        <Square clickEvent={() => handleClick(4)} value={boardState[4]}/>
        <Square clickEvent={() => handleClick(5)} value={boardState[5]}/>
      </div>
      <div className='row'>
        <Square clickEvent={() => handleClick(6)} value={boardState[6]}/>
        <Square clickEvent={() => handleClick(7)} value={boardState[7]}/>
        <Square clickEvent={() => handleClick(8)} value={boardState[8]}/>
      </div>
    </div>
  );
}

export default Board;

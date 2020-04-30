import React, {useContext} from 'react';
import TurnContext from './contexts/PlayerTurns';
import BoardState from './contexts/BoardContext';
import Square from './Square';

const Board = (props) => {
  // const [boardState, setBoardState] = React.useState([]);
  let turn = useContext(TurnContext);
  let boardState = useContext(BoardState);
  console.log(boardState)

  // const [buttonValue, setButtonValue] = useState('');

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
      boardState[num] = turn;
      if (turn === 'O') {
        turn = 'X'
      }
      else {
        turn = 'O'
      }
      console.log('ive been clicked, i am ' + boardState[num])
      console.log(boardState[1])
    }
  }

  return (
    <div className='board'>
      <h3>{status}</h3>
      <BoardState.Provider value={boardState}>
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
      </BoardState.Provider>
    </div>
  );
}

export default Board;

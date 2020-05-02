import React from 'react';
import Cells from './Cells';
import {TurnContext, SetTurnContext} from './Game';

//the main function aka the juiciest part of the code
function Board(props) {
  //createt the state of the board boardState is the current state, set is indicating the initial state
	const [boardState, setBoardState] = React.useState(new Array(9).fill(null));

	const turn = React.useContext(TurnContext);
  const setTurn = React.useContext(SetTurnContext);

  //lists the varying winning conditions
	function declareWinner(board) {
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

    //check after each play the winning conditions
		for(let i = 0; i < conditions.length; i++){
			const [first, second, third] = conditions[i]

			if (board[first] && board[second] === board[first] && board[third] === board[first]) {
				return board[first];
			}
		}
		return null;
	}

	const winner = declareWinner(boardState)
	let status;
	if(winner) {
		status = `The winner is ${winner}`
	}

	function clickHandler(num) {
		if (!winner && !boardState[num]) {
      boardState[num] = turn;
      setBoardState(boardState)
      setTurn((turn === 'X') ? 'O' : 'X');
		}
	}

	return (
		<div className='board'>
		 <h3>{status}</h3>
			<div className="rows">
				<Cells click={() => clickHandler(0)} value={boardState[0]}/>
				<Cells click={() => clickHandler(1)} value={boardState[1]}/>
				<Cells click={() => clickHandler(2)} value={boardState[2]}/>
			</div>
			<div className="rows">
				<Cells click={() => clickHandler(3)} value={boardState[3]}/>
				<Cells click={() => clickHandler(4)} value={boardState[4]}/>
				<Cells click={() => clickHandler(5)} value={boardState[5]}/>
			</div>
			<div className="rows">
				<Cells click={() => clickHandler(6)} value={boardState[6]}/>
				<Cells click={() => clickHandler(7)} value={boardState[7]}/>
				<Cells click={() => clickHandler(8)} value={boardState[8]}/>
			</div>
		</div>

	)
}

export default Board;

import React, {useContext} from 'react';
import Board from './Board';
import TurnContext from './contexts/PlayerTurns';

const Game = () => {
  // const [turn, setTurn] = useState('X');
    const turn = useContext(TurnContext);
    console.log(turn)

  return (
    <div>
    <TurnContext.Provider value={turn}>
      <h2 className='header'>Player {turn}, it's your turn</h2>
      <Board />
    </TurnContext.Provider>
    </div>
  );
}

export default Game;

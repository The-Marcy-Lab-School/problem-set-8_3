import React, { useContext } from 'react';
import BoardContext from './contexts/BoardContext';

const Square = ({id}) => {
  const { board, handleClick } = useContext(BoardContext);
  return (
    <div className="square" onClick={() => handleClick(id)}>
      { board[id] }
    </div>
  );
};

export default Square;
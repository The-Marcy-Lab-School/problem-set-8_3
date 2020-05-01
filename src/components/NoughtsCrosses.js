import React, { useContext } from 'react';
import { Button, Container, Row } from 'reactstrap';
import GameContext from '../context/GameContext';
import Cell from './Cell';

const NoughtsCrosses = () => {
  const { game } = useContext(GameContext);
  const { board, isXNext, winner } = game;
  return (
    <>
      <h1>Noughts and Crosses</h1>
      <Button color="primary" disabled>
        New Game
      </Button>
      <h2>Up next: {isXNext ? 'X' : 'O'}</h2>
      {winner && <h2>Winner: {winner}</h2>}
      <Container className="game-board">
        <Row xs="3">
          {board.map((slot, i) => {
            return <Cell key={i} index={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default NoughtsCrosses;

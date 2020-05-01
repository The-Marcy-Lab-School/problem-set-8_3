import React, { useContext } from 'react';
import TurnContext from './context/TurnContext'

function Cells(props) {
  // render either X or O
  // console.log('cells', props)

  const turn = useContext(TurnContext)
  return <button className="button" onClick={props.click}>{props.value}</button>;
}

export default Cells;

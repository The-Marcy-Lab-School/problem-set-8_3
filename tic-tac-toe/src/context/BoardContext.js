import React, { createContext } from 'react'


const BoardContext = createContext({
  board: new Array(9).fill(null),
  setBoardState: () => {},
})

export default BoardContext;

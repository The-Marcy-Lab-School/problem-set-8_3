import React, {useState} from "react";
import BoardContext from "./BoardContext";

const BoardContextProvider = ({ children }) => {
  const [turn, setTurn] = useState("X");
  const [boardState, setBoardState] = useState([]);

  const value = {
    turn,
    setTurn,
    boardState,
    setBoardState,
  }

  return (
      <BoardContext.Provider value={value}>
        {children}
      </BoardContext.Provider>
  )
};

export default BoardContextProvider;

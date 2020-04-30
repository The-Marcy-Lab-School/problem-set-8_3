const ScoreContext = React.createContext()

const ScoreProvider = (props) => {
  const [score, setScore] = React.useState({playerOne: 0, playerTwo: 0})
  
  return(
          <ScoreContext.Provider value={[score, setScore]}>
           {props.children}
          </ScoreContext.Provider>
        )
}
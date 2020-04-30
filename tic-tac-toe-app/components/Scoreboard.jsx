const ScoreBoard = () => {
  const [score, setScore] =  React.useContext(ScoreContext)
  return(
      <div className="ScoreBoard">
        <div className="playerOneScore">
          <h2>Player One Score (X): {score.playerOne}</h2>
        </div>
        <div className="playerTwoScore">
          <h2>Player Two Score (O): {score.playerTwo}</h2>
        </div>
      </div>
    )
}
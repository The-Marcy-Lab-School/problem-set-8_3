const container = document.querySelector('.container')



const App = () => {
  return (
    <div>
      <h1>A tic-tac-toe game</h1>
      <ScoreProvider>
        <Board />
        <ScoreBoard />
      </ScoreProvider>
    </div>
  )
}


ReactDOM.render(<App />, container);
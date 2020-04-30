const game = new Game()

const Board = () => {
  const [score, setScore] =  React.useContext(ScoreContext)
  
  const [box1, setBox1] = React.useState("")
  const [box2, setBox2] = React.useState("")
  const [box3, setBox3] = React.useState("")
  const [box4, setBox4] = React.useState("")
  const [box5, setBox5] = React.useState("")
  const [box6, setBox6] = React.useState("")
  const [box7, setBox7] = React.useState("")
  const [box8, setBox8] = React.useState("")
  const [box9, setBox9] = React.useState("")
  
  const move = (e) => {

    const clearBoard = () => {
      for(let square in boxStates){
        boxStates[square]("")
        
      }
      game.checkBoard(game.turn)
      game.turn = 1
      
    }
    
    const boxStates = {
      box1: setBox1,
      box2: setBox2,
      box3: setBox3,
      box4: setBox4,
      box5: setBox5,
      box6: setBox6,
      box7: setBox7,
      box8: setBox8,
      box9: setBox9,
    }
    const box = e.target.id
    if(game.turn % 2 !== 0){
      boxStates[box](<PlayerOne/>)
      document.getElementById(box).removeAttribute("onClick");
      game.playerOne.makeMove(parseInt(box[3]) - 1)
      
      if(game.checkBoard(game.turn) === "Game Over"){
       
        setScore(() => {
          return {
            playerOne: score.playerOne + 1,
            playerTwo: score.playerTwo
          }
        })
        clearBoard()
      }
      if(game.checkBoard(game.turn) === "Game Tie"){
        
        setScore(() => {
          return {
            playerOne: score.playerOne,
            playerTwo: score.playerTwo
          }
        })
        clearBoard()
      }
      
      game.turn += 1
      return game.turn
    }
    if(game.turn % 2 === 0){
      boxStates[box](<PlayerTwo/>)
      document.getElementById(box).removeAttribute("onClick");
      
      game.playerTwo.makeMove(parseInt(box[3]) - 1)
     
     if(game.checkBoard(game.turn) === "Game Over"){
       
        setScore(() => {
          return {
            playerOne: score.playerOne,
            playerTwo: score.playerTwo + 1
          }
        })
        clearBoard()
      }
      if(game.checkBoard(game.turn) === "Game Tie"){
        
        setScore(() => {
          return {
            playerOne: score.playerOne,
            playerTwo: score.playerTwo
          }
        })
        clearBoard()
      }
      
      game.turn += 1
      return game.turn
    }
  }
  return (
    <div>
      <section className="row">
        <div onClick={(e) => move(e)} className="box" id="box1">{box1}</div>
        <div onClick={(e) => move(e)} className="box" id="box2">{box2}</div>
        <div onClick={(e) => move(e)} className="box" id="box3">{box3}</div>
      </section>
      <section className="row">
        <div onClick={(e) => move(e)} className="box" id="box4">{box4}</div>
        <div onClick={(e) => move(e)} className="box" id="box5">{box5}</div>
        <div onClick={(e) => move(e)} className="box" id="box6">{box6}</div>
      </section>
      <section className="row">
        <div onClick={(e) => move(e)} className="box" id="box7">{box7}</div>
        <div onClick={(e) => move(e)} className="box" id="box8">{box8}</div>
        <div onClick={(e) => move(e)} className="box" id="box9">{box9}</div>
      </section>
    </div>
  )
}



class Game{
    constructor(){
        this.playerOne = new Player()
        this.playerTwo = new Player()
        this.playerOne.move = 'X'
        this.playerTwo.move = 'O'
        this.board = ['', '', '', '', '', '', '', '', '']
        this.posTracker = {}
        this.turn = 1
        this.winner = null
    }
    
    checkBoard(candidate){

        for(let position in this.board){
            this.posTracker[position] = this.board[position] 
        }
        //Checks each row to see if a player won
        if(this.posTracker['0'] === this.posTracker['1'] && this.posTracker['0'] === this.posTracker['2'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver() 
            return 'Game Over'
        }
        if(this.posTracker['3'] === this.posTracker['4'] && this.posTracker['3'] === this.posTracker['5'] && this.posTracker['3'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        if(this.posTracker['6'] === this.posTracker['7'] && this.posTracker['6'] === this.posTracker['8'] && this.posTracker['6'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        //Checks each diagonal row to see if a player won
        if(this.posTracker['0'] === this.posTracker['4'] && this.posTracker['0'] === this.posTracker['8'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        if(this.posTracker['2'] === this.posTracker['4'] && this.posTracker['2'] === this.posTracker['6'] && this.posTracker['2'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        //Checks each column to see if a player won
        if(this.posTracker['0'] === this.posTracker['3'] && this.posTracker['0'] === this.posTracker['6'] && this.posTracker['0'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        if(this.posTracker['1'] === this.posTracker['4'] && this.posTracker['1'] === this.posTracker['7'] && this.posTracker['1'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        if(this.posTracker['2'] === this.posTracker['5'] && this.posTracker['2'] === this.posTracker['8'] && this.posTracker['2'] !== ''){
            candidate % 2 === 0 ? game.playerOne.score += 1 : game.playerTwo.score += 1
            this.gameOver()
            return 'Game Over'
        }
        //Checks to see if there is a draw
        if(candidate >= 9){
            return 'Game Tie'
        } 
        
    }
    
    gameOver(){
        this.board = ['', '', '', '', '', '', '', '', '']
        if(game.turn % 2 !== 0){
            this.playerOne.score += 1
            return this.playerOne.score
        }
        this.playerTwo.score += 1
        return this.playerTwo.score
    }
    
}

class Player{
    constructor(){
        this.score = 0
    }
    makeMove(index){
        game.board.splice(index, 1, this.move)
    }
}

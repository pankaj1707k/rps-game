let yourScore = 0
let compScore = 0
const yourScoreElement = document.getElementById('your-score')
const compScoreElement = document.getElementById('comp-score')
const resultElement = document.querySelector('.result-text')
const rockElement = document.querySelector('.move-rock')
const paperElement = document.querySelector('.move-paper')
const scissorsElement = document.querySelector('.move-scissors')
const resetElement = document.querySelector('.reset')

/* Generate random move for the computer */
function getRandomMove(){
    let allMoves = [ 'Rock', 'Paper', 'Scissors' ]
    let randomNumber = Math.floor(Math.random() * 3)
    return allMoves[randomNumber]
}

/* You Won a point */
function youWin(yourMove, compMove){
    yourScore++
    yourScoreElement.innerHTML = yourScore
    resultElement.innerHTML = `${yourMove} won over ${compMove}`
}

/* Computer won a point */
function youLose(yourMove, compMove){
    compScore++
    compScoreElement.innerHTML = compScore
    resultElement.innerHTML = `${yourMove} lost to ${compMove}`
}

/* No player gets a point */
function gameDraw(){
    resultElement.innerHTML = 'Draw!'
}

/* Game starts with this function after the player makes a move */
function game(yourMove){
    let compMove = getRandomMove()
    switch (yourMove + compMove){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            youWin(yourMove, compMove)
            break
        
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            youLose(yourMove, compMove)
            break
        
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            gameDraw()
            break
    }
}

/* Resets the game to initial state with all scores zero */
function resetGame(){
    yourScore = 0
    compScore = 0
    yourScoreElement.innerHTML = yourScore
    compScoreElement.innerHTML = compScore
    resultElement.innerHTML = "Let's Play!"
    console.clear()  // Not required
}


rockElement.addEventListener( 'click', () => game('Rock') )
paperElement.addEventListener( 'click', () => game('Paper') )
scissorsElement.addEventListener( 'click', () => game('Scissors') )
resetElement.addEventListener( 'click', () => resetGame() )
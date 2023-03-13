let score = 0;
let firstPoint = 1
let secondPoint = 2
let thirdPoint = 3
let scoreEl = document.getElementById('score1-el')
let score2El = document.getElementById('score2-el')

function home1(){
    score += 1
    let result = parseInt(scoreEl.textContent) + firstPoint
    
    scoreEl.textContent = result
}
function home2(){
    result = parseInt(scoreEl.textContent) + secondPoint
    scoreEl.textContent = result
    console.log(result)
}
function home3(){
    result = parseInt(scoreEl.textContent) + thirdPoint
    scoreEl.textContent = result
}

function guest1() {
    score += 1
    let result = parseInt(score2El.textContent) + firstPoint
    score2El.textContent = result
}
function guest2(){
    let result = parseInt(score2El.textContent) + secondPoint
    score2El.textContent = result
}
function guest3(){
    let result = parseInt(score2El.textContent) + thirdPoint
    score2El.textContent = result
}
let endGame = document.getElementById('end-game')
console.log(endGame)
let gameover = document.getElementById('final-score')
console.log(gameover)

function GameOver(){
    if(scoreEl.textContent > score2El.textContent) {
        return(gameover.textContent = "Home team won the game") 
    } else if (scoreEl.textContent == score2El.textContent){
        return(gameover.textContent = "The game ended in Draw")
    } else if (scoreEl.textContent < score2El.textContent){
        return(gameover.textContent = 'Guest Team won the game')
    }
   
}
function newGame(){
    scoreEl.textContent = 0;
    score2El.textContent = 0;
    gameover.textContent = ""
}


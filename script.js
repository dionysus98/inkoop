'use strict'

const btnStart = document.querySelector('.btn__start')
const btnReset = document.querySelector('.btn__reset')
const playerOneDisplay = document.querySelector('.game__player-one')
const playerTwoDisplay = document.querySelector('.game__player-two')
const mailDisplay = document.querySelector('.footer__contact--gmail')

const playerOneScore = document.querySelector('.game__player-one--score')
const playerTwoScore = document.querySelector('.game__player-two--score')
const playerOneBoard = document.querySelector('.game__player-one--board')
const playerTwoBoard = document.querySelector('.game__player-two--board')

let player1score = 100
let player2score = 100

// Display Board

const displayBoard = () => {
    btnStart.style.cursor = 'not-allowed'
    btnStart.removeEventListener('click', play)
    btnStart.classList.remove('btn__start')

    if ((1 * playerOneBoard.textContent) > (1 * playerTwoBoard.textContent)) {
        playerOneScore.textContent = 'you Won'
        playerTwoScore.textContent = 'You Lose'
        playerOneDisplay.classList.add('winner')
        playerTwoDisplay.classList.add('loser')
    }

    if ((1 * playerTwoBoard.textContent) > (1 * playerOneBoard.textContent)) {
        playerTwoScore.textContent = 'You Won'
        playerOneScore.textContent = 'You Lose'
        playerTwoDisplay.classList.add('winner')
        playerOneDisplay.classList.add('loser')
    }
}

// Start Button 

const getRandomNum = (num) => Math.trunc(Math.random() * num)

const play = function () {
    playerOneScore.textContent = player1score
    playerTwoScore.textContent = player2score

    if (player1score < 5 || player2score < 5) {

        playerOneScore.textContent = player1score = 100
        playerTwoScore.textContent = player2score = 100

        if (player1score > player2score) {
            playerOneBoard.textContent++
        }
        else {
            playerTwoBoard.textContent++
        }
        return
    }

    if (player1score < 5) {
        playerOneScore.textContent = player1score -= 0
        playerTwoScore.textContent = player2score -= getRandomNum(6)
    }
    else if (player2score < 5) {
        playerTwoScore.textContent = player2score -= 0
        playerOneScore.textContent = player1score -= getRandomNum(6)
    }
    else {
        playerOneScore.textContent = player1score -= getRandomNum(6)
        playerTwoScore.textContent = player2score -= getRandomNum(6)
    }

    if ((1 * playerOneBoard.textContent) === 3 || (1 * playerTwoBoard.textContent) === 3)
        displayBoard()
}

// Reset button

const reset = () => {
    player1score = 100
    player2score = 100

    playerOneBoard.textContent = 0
    playerTwoBoard.textContent = 0
    playerOneScore.textContent = 100
    playerTwoScore.textContent = 100

    playerOneDisplay.classList.remove('winner')
    playerOneDisplay.classList.remove('loser')
    playerTwoDisplay.classList.remove('winner')
    playerTwoDisplay.classList.remove('loser')

    btnStart.style.cursor = 'pointer'
    btnStart.classList.add('btn__start')
    btnStart.addEventListener('click', play)
}

//Event Handlers

btnStart.addEventListener('click', play)
btnReset.addEventListener('click', reset)

//Mail Display

mailDisplay.addEventListener('click', () => {
    document.querySelector('span').classList.toggle('hidden')
})

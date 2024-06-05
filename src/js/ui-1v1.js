
import { checkWinner, getInitials } from './common.js';
import { closeModalReset, openModalWin, openModalDraw } from './modal.js';

const cells = document.querySelectorAll('.cell');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');
const drawScore = document.getElementById('draw-score');

const player1ScoreWin = document.getElementById('player1-score-modal-win');
const player2ScoreWin = document.getElementById('player2-score-modal-win');
const drawScoreWin = document.getElementById('draw-score-modal-win');

const player1ScoreLose = document.getElementById('player1-score-modal-lose');
const player2ScoreLose = document.getElementById('player2-score-modal-lose');
const drawScoreLose = document.getElementById('draw-score-modal-lose');

const player1ScoreDraw = document.getElementById('player1-score-modal-draw');
const player2ScoreDraw = document.getElementById('player2-score-modal-draw');
const drawScoreDraw = document.getElementById('draw-score-modal-draw');

let playerName1 = localStorage.getItem('playerName1');
let playerName2 = localStorage.getItem('playerName2');

const iconBack = document.querySelector('.icon-back');

iconBack.addEventListener('click', ()=> {
    localStorage.removeItem('playerName1');
    localStorage.removeItem('playerName2');
    window.location.href = '../../index.html';
});


let currentPlayer = 'X';
let winner = null;
let board = Array(9).fill(null);
let scores = { player1: 0, player2: 0, draw: 0 };



updateScoresUI(null);

function handleCellClick1vs1(event) {

    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] || checkWinner(board)) return;

    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer === 'X' ? '<img src="../svg/X-play.svg">' : '<img src="../svg/0-play.svg">';

    if (checkWinner(board)) {
        winner = updateScores(currentPlayer);
        updateScoresUI(winner);
        openModalWin();
    } else if (board.every(cell => cell)) {
        scores.draw++;
        updateScoresUI(null);
        openModalDraw();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame1vs1() {
    board.fill(null);
    cells.forEach(cell => (cell.innerHTML = ''));
    currentPlayer = 'X';
}

function resetAllGame1vs1() {
    board.fill(null);
    cells.forEach(cell => (cell.innerHTML = ''));
    currentPlayer = 'X';
    scores = { player1: 0, player2: 0, draw: 0 };
    closeModalReset();
}

function updateScores(winner) {
    if (winner === 'X') {
        scores.player1++;
        return playerName1;
    } else {
        scores.player2++;
        return playerName2;
    }
}

function updateScoresUI(winner) {
    player1Score.textContent = `${scores.player1} Ganadas`;
    player2Score.textContent = `${scores.player2} Ganadas`;
    drawScore.textContent = `${scores.draw} Empates`;

    player1ScoreWin.textContent = `${scores.player1} Ganadas`;
    player2ScoreWin.textContent = `${scores.player2} Ganadas`;
    drawScoreWin.textContent = `${scores.draw} Empates`;

    player1ScoreLose.textContent = `${scores.player1} Ganadas`;
    player2ScoreLose.textContent = `${scores.player2} Ganadas`;
    drawScoreLose.textContent = `${scores.draw} Empates`;

    player1ScoreDraw.textContent = `${scores.player1} Ganadas`;
    player2ScoreDraw.textContent = `${scores.player2} Ganadas`;
    drawScoreDraw.textContent = `${scores.draw} Empates`;

    document.getElementById('player1-name').textContent = playerName1;
    document.getElementById('player2-name').textContent = playerName2;
    document.querySelector('.player-1 h2').textContent = playerName1;
    document.querySelector('.player-2 h2').textContent = playerName2;
    document.querySelector('#win-modal .player-name').textContent = winner;

    const initialsPlayer1 = getInitials(playerName1);
    const initialsPlayer2 = getInitials(playerName2);

    document.querySelector('.player-1 .avatar h1').textContent = initialsPlayer1;
    document.querySelector('.player-2 .avatar h1').textContent = initialsPlayer2;

    document.querySelector('.player-1 h2').textContent = initialsPlayer1;
    document.querySelector('.player-2 h2').textContent = initialsPlayer2;

    document.querySelector('#win-modal .player-1 h2').textContent = initialsPlayer1;
    document.querySelector('#win-modal .player-2 h2').textContent = initialsPlayer2;

    document.querySelector('#draw-modal .player-1 h2').textContent = initialsPlayer1;
    document.querySelector('#draw-modal .player-2 h2').textContent = initialsPlayer2;

    
}

export {
    handleCellClick1vs1,
    resetGame1vs1,
    updateScoresUI,
    player1Score,
    player2Score,
    drawScore,
    resetAllGame1vs1
}   
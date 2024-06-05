import { checkWinner, getInitials } from './common.js';
import { playCPU } from './logic-cpu.js';
import { closeModalReset, openModalWin, openModalLose, openModalDraw } from './modal.js';

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

const playerName = localStorage.getItem('playerName_P_VS_CPU');
let currentPlayer = 'X';
let isPlayerTurn = true; 
let board = Array(9).fill(null);
let scores =  { player1: 0, player2: 0, draw: 0 };
    
const iconBack = document.querySelector('.icon-back');

updateScoresUI();

iconBack.addEventListener('click', ()=> {
    localStorage.removeItem('playerName_P_VS_CPU');
    window.location.href = '../../index.html';
});





function handleCellClickCPU(event) {
    if (!isPlayerTurn) return;

    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] || checkWinner(board)) return;

    board[index] = currentPlayer;
    cell.innerHTML = currentPlayer === 'X' ? '<img src="../svg/X-play.svg">' : '<img src="../svg/0-play.svg">';

    if (checkWinner(board)) {
        updateScores(currentPlayer);
        openModalWin();
    } else if (board.every(cell => cell)) {
        scores.draw++;
        updateScoresUI();
        openModalDraw();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        isPlayerTurn = false;
        if (currentPlayer === 'O') {
            setTimeout(() => {
                playCPU(board, cells, currentPlayer, handleCellClickCPU)
                if (checkWinner(board)) {
                    updateScores(currentPlayer);
                    openModalLose(currentPlayer);
                }
                currentPlayer = 'X'
                isPlayerTurn = true;
            }, 300);
        }
    }
}

function resetGame() {
    board.fill(null);
    cells.forEach(cell => (cell.innerHTML = ''));
    currentPlayer = 'X';
}

function resetAllGame() {
    board.fill(null);
    cells.forEach(cell => (cell.innerHTML = ''));
    currentPlayer = 'X';
    scores = { player1: 0, player2: 0, draw: 0 };
    closeModalReset();
}

function updateScores(winner) {
    if (winner === 'X') {
        scores.player1++;
        updateScoresUI();
    } else {
        scores.player2++;
        updateScoresUI();
    }
}

function updateScoresUI() {
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

    document.getElementById('player-name').textContent = playerName;
    document.querySelector('.player-1 h2').textContent = playerName;
    document.querySelector('#win-modal .player-name').textContent = playerName;
    document.querySelector('#lose-modal .player-name').textContent = playerName;


    const initials = getInitials(playerName);
    document.querySelector('.player-1 .avatar h1').textContent = initials;
    document.querySelector('.player-1 h2').textContent = initials;
    document.querySelector('#win-modal .player-1 h2').textContent = initials;
    document.querySelector('#lose-modal .player-1 h2').textContent = initials;
    document.querySelector('#draw-modal .player-1 h2').textContent = initials;
        
}


export { handleCellClickCPU, resetGame, player1Score, player2Score, drawScore, resetAllGame};

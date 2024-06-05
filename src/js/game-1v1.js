import { handleCellClick1vs1, player1Score, player2Score, drawScore, resetGame1vs1, resetAllGame1vs1 } from './ui-1v1.js';
import { resetGameModal, nextRoundLose, nextRoundWin, closeModalWin, closeModalLose, nextRoundDraw, closeModalDraw } from './modal.js';


const cells = document.querySelectorAll('.cell');

cells.forEach(cell => cell.addEventListener('click', handleCellClick1vs1));

resetGameModal.addEventListener('click', () => {
    resetAllGame1vs1();
    player1Score.textContent = `0 Ganadas`;
    player2Score.textContent = `0 Ganadas`;
    drawScore.textContent = `0 Empates`;
});

nextRoundWin.addEventListener('click', () => {
    closeModalWin();
    resetGame1vs1();
});

nextRoundLose.addEventListener('click', () => {
    closeModalLose();
    resetGame1vs1();
});

nextRoundDraw.addEventListener('click', () => {
    closeModalDraw();
    resetGame1vs1();
});
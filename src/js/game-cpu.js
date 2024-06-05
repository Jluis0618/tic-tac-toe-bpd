import { handleCellClickCPU, resetGame, resetAllGame, player1Score, player2Score, drawScore } from './ui-cpu.js';
import { resetGameModal, nextRoundLose, nextRoundWin, closeModalWin, closeModalLose, nextRoundDraw, closeModalDraw } from './modal.js';

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleCellClickCPU));

resetGameModal.addEventListener('click', ()=>{
    resetAllGame();
    player1Score.textContent = `0 Ganadas`;
    player2Score.textContent = `0 Ganadas`;
    drawScore.textContent = `0 Empates`;
});

nextRoundWin.addEventListener('click', () => {
    closeModalWin();
    resetGame();
});

nextRoundLose.addEventListener('click', () => {
    closeModalLose();
    resetGame();
});

nextRoundDraw.addEventListener('click', () => {
    closeModalDraw();
    resetGame();
});



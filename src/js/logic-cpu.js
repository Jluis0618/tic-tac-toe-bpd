export function playCPU(board, cells, currentPlayer) {
    const emptyCells = board.reduce((acc, val, index) => (val === null ? [...acc, index] : acc), []);
    const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[randomIndex] = currentPlayer;
    cells[randomIndex].innerHTML = '<img src="../svg/0-play.svg">';
}

// Modal Reset

let exitReset = document.getElementById("exit-reset");
let resetGame = document.getElementById("reset-game");
let resetGameModal = document.getElementById("reset-game-modal");

function openModalReset(){
    let modalReset = document.getElementById("reset-modal");
    modalReset.style.display = "flex";
    setTimeout(function() {
      modalReset.classList.add("show");
    }, 10);
}

function closeModalReset(){
    let modalReset = document.getElementById("reset-modal");
    modalReset.classList.remove("show");
    setTimeout(function() {
      modalReset.style.display = "none";
    }, 300);
}

resetGame.addEventListener('click', openModalReset);
exitReset.addEventListener('click', closeModalReset);


window.onclick = function(event) {
    let modalReset = document.getElementById("reset-modal");
  if (event.target == modalReset) {
    closeModalReset();
  }
}

// Modal WIN
let exitWin = document.getElementById("exit-win");
let nextRoundWin = document.getElementById("next-round-win");

function openModalWin(){
  let modalWin = document.getElementById("win-modal");
  modalWin.style.display = "flex";
  setTimeout(function() {
    modalWin.classList.add("show");
  }, 10);
}

function closeModalWin(){
  let modalWin = document.getElementById("win-modal");
  modalWin.classList.remove("show");
  setTimeout(function() {
    modalWin.style.display = "none";
  }, 300);
}

exitWin.addEventListener('click', ()=>{
  localStorage.removeItem('playerName_P_VS_CPU');
  window.location.href = '../../index.html';
});


// MODAL LOSE
let exitLose = document.getElementById("exit-lose");
let nextRoundLose = document.getElementById("next-round-lose");

function openModalLose(){
  let modalLose = document.getElementById("lose-modal");
  modalLose.style.display = "flex";
  setTimeout(function() {
    modalLose.classList.add("show");
  }, 10);
}

function closeModalLose(){
  let modalLose = document.getElementById("lose-modal");
  modalLose.classList.remove("show");
  setTimeout(function() {
    modalLose.style.display = "none";
  }, 300);
}

exitLose.addEventListener('click', ()=>{
  localStorage.removeItem('playerName_P_VS_CPU');
  window.location.href = '../../index.html';
});


// Modal Draw

let exitDraw = document.getElementById("exit-draw");
let nextRoundDraw = document.getElementById("next-round-draw");

function openModalDraw(){
  let modalDraw = document.getElementById("draw-modal");
  modalDraw.style.display = "flex";
  setTimeout(function() {
    modalDraw.classList.add("show");
  }, 10);
}

function closeModalDraw(){
  let modalDraw = document.getElementById("draw-modal");
  modalDraw.classList.remove("show");
  setTimeout(function() {
    modalDraw.style.display = "none";
  }, 300);
}

exitDraw.addEventListener('click', ()=>{
  localStorage.removeItem('playerName_P_VS_CPU');
  window.location.href = '../../index.html';
});


export {
  openModalWin, 
  closeModalWin,
  openModalReset, 
  closeModalReset, 
  resetGameModal, 
  openModalLose, 
  nextRoundWin, 
  nextRoundLose, 
  closeModalLose,
  openModalDraw,
  closeModalDraw,
  nextRoundDraw}
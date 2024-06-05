
document.getElementById('start-1v1').addEventListener('click', function() {
    let playerName1 = document.getElementById('player1-name').value;
    let playerName2 = document.getElementById('player2-name').value;

    if (playerName1 && playerName2) {
        localStorage.setItem('playerName1', playerName1);
        localStorage.setItem('playerName2', playerName2);
        window.location.href = 'j-vs-j.html';
    } else{
        let error = document.getElementById('error-text');
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        }, 2000);
    }
});
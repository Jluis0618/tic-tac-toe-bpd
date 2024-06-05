document.getElementById('start-vs-cpu').addEventListener('click', function() {
    const playerName_P_VS_CPU = document.getElementById('name-player-cpu').value;
    if (playerName_P_VS_CPU) {
        localStorage.setItem('playerName_P_VS_CPU', playerName_P_VS_CPU);
        window.location.href = 'j-vs-c.html';
    } else{
        let error = document.getElementById('error-text');
        error.style.display = 'block';
        setTimeout(() => {
            error.style.display = 'none';
        }, 2000);
    }
});
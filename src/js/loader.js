// script.js
window.addEventListener('load', function() {
    // Simula la carga del contenido
    let progress = document.querySelector('.progress');
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';
            document.getElementById('content').style.display = 'block';
        } else {
            width += 10; // Aumenta el ancho de la barra de progreso
            progress.style.width = width + '%';
        }
    }, 100); // Aumenta cada 100ms
});
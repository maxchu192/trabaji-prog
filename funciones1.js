
document.getElementById('temaclaro').onclick = function claro() {
    document.body.style.backgroundColor = 'lightgreen';
    document.body.style.color = 'black';
}

document.getElementById('temaoscuro').onclick = function oscuro() {
    document.body.style.backgroundColor = 'darkgreen';
    document.body.style.color = 'lightcyan';
}

document.getElementById('boton').onclick = function cambiar() {
    document.getElementById('respuesta').style.display='block';
}

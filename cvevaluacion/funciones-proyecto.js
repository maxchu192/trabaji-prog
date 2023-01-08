
document.getElementById('temaclaro').onclick = function claro() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}

document.getElementById('temaoscuro').onclick = function oscuro() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

document.getElementById('boton').onclick = function cambiar() {
    document.getElementById('respuesta').style.display='block';
}

/*intento de agregar menu desplegable fallidos*/


/*$(document).ready(main);
var contador = 0;
function main(){
    $('.menu').click(function(){
        contador = (contador + 1)%2
        if(contador == 1){
            $('nav').animate({
                left: '0'
            });
            
        } else {
            
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};*/
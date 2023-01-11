
document.getElementById('temaclaro').onclick = function claro() {
    document.body.style.backgroundColor = 'lightgreen';
    document.body.style.color = 'black';
}

document.getElementById('temaoscuro').onclick = function oscuro() {
    document.body.style.backgroundColor = 'darkgreen';
    document.body.style.color = 'white';
}

document.getElementById('boton').onclick = function cambiar() {
    document.getElementById('respuesta').style.display='block';
}

document.getElementById('menu').onclick = function contar() {
    document.getElementById('navlinks').style.left = 0;
}

document.getElementById('links').onclick = function cerrar() {
    document.getElementById('navlinks').style.left = '-100%';
}


/*intento de agregar menu desplegable fallidos copiado de
(https://tutorialesinformatica.com/programacion/menu-horizontal-html-css/)


$(document).ready(main);
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
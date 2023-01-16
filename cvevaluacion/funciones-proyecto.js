
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

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      JSON.stringify(data);
      console.log(data);
      document.getElementById('foto').src =
      data.results[0].picture.large;

      document.getElementById('data1').innerHTML =
      "Mi nombre es "+
      data.results[0].name.first+" "+data.results[0].name.last+
      ", tengo "+
      data.results[0].dob.age+
      "años, vivo en la calle "+
      data.results[0].location.street.name+" "+data.results[0].location.street.number+
      " de la ciudad "+
      data.results[0].location.city+" de "+data.results[0].location.country;

      document.getElementById('tel').innerHTML =
      "Mi telefono es: "+
      data.results[0].phone;

      document.getElementById('cel').innerHTML =
      "Mi celular es: "+
      data.results[0].cell;

      document.getElementById('email').innerHTML =
      "Mi email es: "+
      data.results[0].email;

      document.getElementById('nombre').innerHTML =
      data.results[0].name.first+" "+data.results[0].name.last;
    }
  });

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
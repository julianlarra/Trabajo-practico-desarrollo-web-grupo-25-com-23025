
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName('slider-item');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); 
  }





/*  
function accion(){
    console.log('esta funcionando mi boton')
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) { ancla[i].classList.toggle('desaparece')}
    
    } */
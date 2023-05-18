
document.querySelector('form').addEventListener('submit', function (e) {
    // Detiene el envío del formulario
    e.preventDefault();
  
    // Obtén los valores ingresados por el usuario
    var fullname = document.getElementById('Fullname').value;
    var email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementsByName('Message')[0].value;
  
    // Realiza la validación de los campos requeridos
    if (fullname === '' || email === '' || phone === '' || message === '') {
      alert('Por favor, completa todos los campos');
      return;
    }
  
    // Aquí puedes agregar más validaciones según tus requisitos
  
    // Si todos los campos son válidos, puedes enviar el formulario
    document.querySelector('form').submit();
  });
  


  function accion(){
    console.log('esta funcionando mi boton')
    var ancla = document.getElementsByClassName('nav-enlace');
    for (var i = 0; i < ancla.length; i++) { ancla[i].classList.toggle('desaparece')}
    
    } 
    
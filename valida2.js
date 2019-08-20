var form  = document.getElementsByTagName('form')[0];
var email = document.getElementById('email');

// Lo siguiente es un truco para obtener el siguiente elemento adyacente en el DOM
// Esto es peligroso porque podrías fácilmente provocar un bucle infinito
// En navegadores modernos, es preferible usar element.nextElementSibling
var error = email;
while ((error = error.nextSibling).nodeType != 1);

// Según la especificación HTML5
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Muchos navegadores antiguos no soportan el método addEventListener.
// Aquí hay una forma simple de tratar con esto; no es la única.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on"+event];
  element["on"+event] = function (e) {
    var output = callback(e);
    
    // Un callback que devuelve `false` detiene la cadena de callbacks
    // e interrumpe la ejecución de las funciones del evento.
    if (output === false) return false;

    if (typeof previousEventCallBack === 'function') {
      output = previousEventCallBack(e);
      if(output === false) return false;
    }
  }
};

// Ahora podemos reconstruir nuestras restricciones de validaciones
// Como no podemos contar con pseudo-clases CSS, tenemos que establecer
// explícitamente la clase valid/invalid en nuestro campo de correo
addEvent(window, "load", function () {
  // Aquí, revisamos si el campo está vacío (recuerda, el campo no es requerido)
  // Si no lo es, revisamos si su contenido es una dirección de correo bien formada.
  var test = email.value.length === 0 || emailRegExp.test(email.value);
 
  email.className = test ? "valid" : "invalid";
});

// Esto define qué pasará cuando el usuario escribe en el campo de texto
addEvent(email, "keyup", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email.className = "invalid";
  }
});

// Esto define qué pasará cuando el usuario intente enviar los datos del formulario
addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
 
  if (!test) {
    email.className = "invalid";
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";

    // Algunos navegadores antiguos no soportan el método event.preventDefault()
    return false;
  } else {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});
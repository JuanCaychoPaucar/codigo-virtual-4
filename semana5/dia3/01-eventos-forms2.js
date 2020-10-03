const mensaje = document.getElementById("mensaje");
const pais = document.getElementById("pais");
const helper = document.getElementById("helper");


/**
 * Todos estos eventos se dan con el uso del teclado
 *
 * onkeyup = evento que se dispara cuando una tecla es soltada luego de presionarla.
 * onkeypress = evento que se disparacuando una tecla es presionada.
 * onkeydown = la union de ambos eventos.
 */

mensaje.onkeyup = (evento) => {
//   console.log(evento);
console.log(mensaje.value.length);
  let cantidad = 130 - mensaje.value.length; //ver video 03:04:00
};

/**
 * Los eventos son sucesosque ocurren cuando un elemento es afectado por una accion:
 * Clic, pasar el mouse por encima, presionar una tecla, mantener el clic presionado,
 * escribir algo sobre el elemento(input), etc
 */

/**
 * 'Como se configura un evento?
 * - Forma 1:
 * elemento.on[evento] = () => {}
 *
 * -Forma 2:
 * elemento.addEventListener("[evento]", () => {})
 */

let contador = 0;
const textoContador = document.getElementById("textoContador");

// FORMA 1
const btn1 = document.getElementById("btn1");
btn1.onclick = () => {
  contador++;
  textoContador.innerText = contador;
  console.log("Ups!me hicieron click");
};

// INFORMACION QUE TRAE UN EVENTO
const btn2 = document.getElementById("btn2");
btn2.onclick = (evento) => {
  /**
   * Informacion que produce un evento
   */
  console.log(evento);
  /**
   * evento.target = retornael elemento en el que sucede el evento
   */
  console.log(`** evento.target **`);
  console.log(evento.target);

  /**
   * evento.clientX = coordenada en X respecto del VIEWPORT en px, en donde se hizo clic
   * evento.clientY = coordenada en Y respecto del VIEWPORT en px, en donde se hizo clic
   */
  console.log(`** evento.clientX **`);
  console.log(evento.clientX);

  console.log(`** evento.clientY **`);
  console.log(evento.clientY);

  /**
   * evento.offsetX = coordenada en X respecto del elemento en px en donde se hizo clic
   * evento.offsetY = coordenada en Y respecto del elemento en px en donde se hizo clic
   */
  console.log(`** evento.offsetX **`);
  console.log(evento.offsetX);

  console.log(`** evento.offsetY **`);
  console.log(evento.offsetY);

  /**
   * evento.altKey = retorna true si el evento ha sido ejecutado con
   * la ayuda de la tecla ALT
   */
  console.log(`** evento.altKey **`);
  console.log(evento.altKey);
};

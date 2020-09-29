/**
 * WINDOW
 * Es un objeto que esta creado automaticamente en el navegador.
 * En el se encuentran todas las funciones y propiedades
 * para manipular al DOM y demas caracteristicas del navegador.
 *
 * DOM: componentes internos que participan en la estructura de una pagina web
 */

/**
 * Propiedades:
 *
 * window.document => propiedad que manipula al DOM
 * window.innerWidth => retorna el ancho de la ventana en pixeles.
 * window.innerHeight => retorna el alto de la ventana en pixeles.
 */

const ancho = window.innerWidth;
const alto = window.innerHeight;

console.log(`Ancho: ${ancho}`);
console.log(`Alto: ${alto}`);

/**
 * OJO:
 * Pueden utilizarse propiedades del objeto window,
 * sin mencionar a dicho objeto. Por ejemplo:
 *
 * En lugar de colocar window.innerWidth, se puede usar innerWidth
 */

 /**
  * OJO:
  * En NodeJS no existe el objeto window,
  * porque no tenemos un navegador.
  * Ademas, NodeJS es backend.
  */

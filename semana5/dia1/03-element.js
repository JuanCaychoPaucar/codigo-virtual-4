/**
 * OBJETO ELEMENT Y SUS PROPIEDADES
 */

const titulo = document.getElementById("title");
console.log(titulo);

/**
 * PROPIEDADES
 *
 * element.style.[propiedadCSS]
 * Colocamos estilos como en CSS a los elementos
 */

titulo.style.color = "tomato";
titulo.style.fontSize = "4rem";

const seccion1 = document.getElementById("seccion1");

/**
 * elemento.offsetWidth
 * devuelve el ancho de un elemento
 *
 * elemento.offsetHeight
 * devuelve el alto de un elemento
 */

const anchoSeccion1 = seccion1.offsetWidth;
const altoSeccion1 = seccion1.offsetHeight;

console.log(`Ancho de seccion1: ${anchoSeccion1}px`);
console.log(`Alto de seccion1: ${altoSeccion1}px`);

/**
 * elemento.innerHTML
 * setea o retorna el contenido HTML de un elemento, es decir,
 * si colocamos etiquetas, estas seran renderizadas
 *
 * elemento.innerText
 * setea o retorna el contenido a nivel de texto de un elemento
 *
 */

const parrafo = document.getElementById("parrafo");
console.log("Contenido HTML del parrafo:");
console.log(parrafo.innerHTML);

console.log("Contenido Textual del parrafo:");
console.log(parrafo.innerText);

const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

parrafo2.innerHTML = "<strong>CodiGo</strong> <a href='#'>Link 1</a>";
parrafo3.innerText = "<strong>CodiGo</strong> <a href='#'>Link 1</a>";

/**
 * window.document es igual a colocar
 * document
 */

/**
 * Atrapar elementos del DOM con document.
 * Es decir, capturarlos en una variable
 */

/**
 * document.getElementsById("id_del_elemento_en_el_DOM")
 * retorna una referencia al elemento del DOM con el id proporcionado
 */

const header = document.getElementById("header");
console.log(header);

/**
 * dovument.getElementsByClassName("nombre_de_la_clase_en_comun")
 * retorna un arreglo de elementos que en el DOM tengan el mismo nombre de la clase
 */

const cajas = document.getElementsByClassName("caja");
console.log(cajas); //retorna un HtmlCollection
console.log(cajas[0]);

// cajas.forEach((elemento) => {
//     console.log(elemento);
// });
/**
 *
 * El codigo anterior generara un error porque no es un arreglo nativo,
 * por ende, no tiene todas las funciones
 */

/**
 * TIP
 * ¿Como convertir un HtmlCollection o cualquier otra estructura
 * que tenga forma de arreglo a un arreglo nativo?
 */

const cajasArray = Array.from(cajas);
console.log(cajasArray);

/**
 * document.querySelector("selector_tipo_css")
 * Devuelve el primer o unico elemento que coincida con el selector
 *
 * document.querySelectorAll("selector_tipo_css")
 * Devuelve todos los elementos que coincidan con el selector
 */

const main = document.querySelector("#main");
console.log(main);

/**
 * TODOS LOS ELEMENTOS RETORNADOS POR LOS DISTINTOS SELECTORES
 * SON DEL TIPO "ELEMENT"
 */

 
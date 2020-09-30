/**
 * Creacion de elementos en el DOM
 */

/**
 * document.createElement("nombre_de_la_etiqueta");
 * retorna la referencia a un elemento que AUN NO ESTA PRESENTE EN EL DOM
 * pero que sera agregado en lo posterior.
 */

const titulo = document.createElement("h1");
titulo.innerText = "Titulo de mi App";
titulo.setAttribute("class","claseprueba");
console.log(titulo);

/**
 * element.appendChild(elemento)
 * agrega a un elemento creado, a un elemento padre.
 *
 * Si el elemento no existia en el DOM, ahora
 * va a estar como un hijo del element.
 */

const header = document.getElementById("header");
header.appendChild(titulo);

//podemos luego modificar el texto
titulo.innerText = "CodiGo - Bootcamp";
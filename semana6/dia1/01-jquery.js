/**
 * jquery, libreria de JS para manipular el DOM de una manera mas facil y corta
 */

/**
 * Seleccionar uno o mas elementos del DOM
 */
const title = $("#title");
console.log(title);

/**
 * PROPIEDADES
 * elemento.text()
 * getter y setter del innerTEXT de un elemento
 */

console.log(title.text());

title.text("Nuevo texto del titulo");

/**
 * elemento.html()
 * getter y setter del innerHTML de un elemento
 */
console.log($("#nav-lista").html());
$("#nav-lista").html("<li><a href='#'>Unico link</a></li>");

/**
 * Selector multiple
 * Jquery puede seleccionar varios elementos de acuerdo a la regla del selector
 */

$(".parrafo").html("Nuevo texto del parrafo");

/**
 * eventos
 * los eventos sonsimilares a JS puro. Sin mebargo,
 * Jquery intenta reducir codigo a la hora de setear los eventos
 * elemento.JQuery.click(()=>{})
 */

$("#btnClick").click((e) => {
  console.log(e);
  console.log("click en el btnClick ! =)");
});

// $(selector).click(function (e) {
//   e.preventDefault();
// });

const get = (selector) => {
  return document.querySelector(selector);
};

$("#btnTextoRojo").click((e) => {
  // elemento.addClass = agrega una clase al/los elemento(s) seleccionados
  $(".parrafo").addClass("texto-rojo");
});

$("#btnCssTitle").click((e) => {
  //elemento.css("propiedad", "valor")
  $("#title").css("font-family", "Helvetica").css("color", "#ff3542");
});

$("#formulario").submit((e) => {
  e.preventDefault();
  // obtener el value de un input
  console.log($("#inputEmail").val());
});

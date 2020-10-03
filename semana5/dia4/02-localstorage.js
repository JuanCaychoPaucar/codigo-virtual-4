/**
 * El localstorage es una memoria que tiene nuestro navegador a nivel local.
 * En el, podemos guardar algunos datos del usuario que no sean relevantes,
 * sensibles o criticos.
 * En el. podemos guardar por ejemplo, preferencias (color, tema, ultimo texto copiado, etc).
 * El localstorage es diferente para cada dominio en el mismo equipo. Ejm:
 *  - para www.google.com nuestro ordenador tiene un localstorage.
 *  - para www.facebook.com nuestro ordenador tiene un localstorage.
 *  - para www.youtube.com nuestro ordenador tiene un localstorage.
 */

const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor");
//const body = document.querySelector(".bodyC"); // podemos colocarle clase
//const body = document.querySelector("body"); // podemos colocarle etiqueta
const body = document.querySelector("#bodyID"); // podemos colocarle id
const btnEliminar = document.getElementById("btnEliminar");

btnEliminar.onclick = () => {
  //eliminar un item del localstorage
  // window.localStorage.removeItem("clave");

  window.localStorage.removeItem("color");
  body.style.backgroundColor = "white";

  // para recargar la pagina. No es recomendable
  // window.location.reload;
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  console.log(inputColor.value);

  /**
   * guardar el color favorito en el localstorage
   * window.localStorage.setItem("clave", "valor");
   * "valor" siempre debe ser un string
   */
  const colorFavorito = inputColor.value;
  window.localStorage.setItem("color", colorFavorito);
  body.style.backgroundColor = colorFavorito;
};

const verificarStorage = () => {
  /**
   * Funcion que obtendra el color favorito del localstorage
   * y lo colocara como background del body.
   * En caso no exista el localstorage, no sucedera nada.
   *
   * window.localstorage.getitem("clave") = retorna el valor en string de la clave proporcionada.
   */

  const colorFavorito = window.localStorage.getItem("color");
  console.log(colorFavorito);

  // si el colorFavorito existe
  if (colorFavorito) {
    body.style.backgroundColor = colorFavorito;
  }
};
verificarStorage();


// (() => {
//   console.log("me ejecute solita y soy recontra anonima");
// })();

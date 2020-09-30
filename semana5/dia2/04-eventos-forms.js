/**
 * formulario.onsubmit
 * evento que se desencadena cuando queremos procesar o enviar el formulario
 */

const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");

let usuarios = [];

const redibujarTbody = () => {
    /**
     * 1. Limpiar el tbody (borrar todo el innerHTML del tbody)
     *  tbody.innerHTML ="";
     * 2. Recorrer una variable string vacia
     * 3. Recorrer el arreglo de usuarios (forEach)
     * 4. En el forEach ir agregando al string vacio la estructura
     *    de la fila por cada usuario (concatenar strings)
     * 5. Luego del foreach, setear el innerHTML del tbody con el string creado
     * 6. Darle estilos a las tablas
     */
};

formulario.addEventListener("submit", (evento) => {
  /**
   * ¿por que se actualiza la pagina con el submit?
   * Porque es el comportamiento por defecto de dicho evento.
   *
   * ¿Como detener el comportamiento por defecto de un evento?
   * evento.preventDefault();
   */
  evento.preventDefault();
  console.log("Procesando el formulario ...");

  let objetoUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(objetoUsuario);
  console.log(usuarios);

  /**
   * RETO:
   * llamar a una funcion que redibuje el tbody
   * cada vez que nuestro arreglo de usuarios es alterado
   */
});

link.onclick = (evento) => {
  evento.preventDefault();
  console.log("Dieron clic al hipervinculo");
};

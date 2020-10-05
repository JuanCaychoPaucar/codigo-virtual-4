/**
 * formulario.onsubmit
 * evento que se desencadena cuando queremos procesar o enviar el formulario
 */

const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbody = document.getElementById("tbody");
const helper = document.getElementById("helper");

let usuarios = [];



const limpiarErrores = () => {
  // quitar el borde rojo al formulario
  formulario.classList.remove("borde-rojo");

  // ocultar el small (helper)
  helper.setAttribute("hidden", true);
};

const generarError = () => {
  //va a hacer mostrar el texto de error y le va a colocar el borde rojo al formulario
  // elemento.removeAttribute("atributo"); eliminar el atributo de un elemento
  helper.removeAttribute("hidden");

  // colocar borde rojo al formulario
  formulario.classList.add("borde-rojo");
};

const eliminarUsuario = (posicion) => {
  console.log(`Eliminando ${posicion}`);

  // filtraremos a todos los usuarios DIFERENTES a la posicion ingresada
  usuarios = usuarios.filter((usu, i) => {
    if (i !== posicion) {
      return usu;
    }
  });

  // redibujamos el tbody
  redibujarTbody();
};

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

  tbody.innerHTML = "";

  // <> </> DOCUMENT FRAGMENT. Lo usamos para que no se dibuje de manera continua en cada iteracion. Por ello loharemos al final del forEach
  let tbodyFalso = new DocumentFragment();

  //utilizamos el segundo parametro (iteraciones)para agregar el Nro a la tabla
  usuarios.forEach((usu, i) => {
    // creamos los elementos HTML
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = usu.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = usu.apellido;

    let tdAcciones = document.createElement("td");

    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdAcciones);
    tdAcciones.appendChild(btnEliminar); // <td><button></button></td>

    btnEliminar.onclick = () => {
      console.log("Se hizo clic en eliminar");
      console.log(`Eliminando el registro de ${usu.nombre}`);
      eliminarUsuario(i);
    };

    tbodyFalso.appendChild(tr);
  });
  tbody.appendChild(tbodyFalso);

  // aqui guardaremos a todos los usuarios en el localstorage
  /**
   * JSON = es una clase (tipo Math) que sirve para trabajar con estructuras JSON.
   * Las convierte a String y tambien convierte de un String a un objeto JSON.
   */

  // 1. convirtiendo un arreglo de objetos a un String
  const usuariosString = JSON.stringify(usuarios);
  console.log(usuariosString);

  // 2. guardar los usuarios string en el localstorage
  localStorage.setItem("usuarios", usuariosString);

  /**
   * colocar el cursor nuevamente en el campo del nombre,
   * para que el usuario este listo para ingresar un siguiente registro
   */
  inputNombre.focus();
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

  // VALIDAR SI LOS CAMPOS ESTAN LLENOS antes de crear os usuarios
  if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
    // indicar un error de ingreso de datos
    // alert("Ups! error en el ingreso de datos");

    generarError();
    return;
  }

  let objetoUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(objetoUsuario); //push lo agrega a la ultima posicion

  inputNombre.value = "";
  inputApellido.value = "";

  /**
   * LIMPIAR LOS ERRORES
   * OJO, si no tenian errores previamente, no importa, igual no afecta los estilos de la aplicacion
   */
  limpiarErrores();

  console.log(usuarios);

  /**
   * RETO:
   * llamar a una funcion que redibuje el tbody
   * cada vez que nuestro arreglo de usuarios es alterado
   */

  redibujarTbody();
});

link.onclick = (evento) => {
  evento.preventDefault();
  console.log("Dieron clic al hipervinculo");
};


// funcion que verifica si tenemos usuarios en el localstorage, para setear el arreglo de usuarios
const verificarStorage = () => {
    const usuariosStorage = window.localStorage.getItem("usuarios");
    if (usuariosStorage !== null) {
      // que si existe la clave usuarios
      // 1.  Convertir un STRING a un objeto JSON
      usuarios = JSON.parse(usuariosStorage);
      console.log(usuarios);
      redibujarTbody();
    }
  };
  
  verificarStorage();
// Si hubieran mas variables, se importan separados por coma.
// SIEMPRE Y CUANDO SEAN DEL MISMO ARCHIVO
// { URL_BACKEND, OTRA_VARIABLE, OTRA_MAS }

/**
 * COLOCAR EL type="module" en el HTML, de lo contrario no funcionara esta caracteristica
 */

// importamos la constante URL_BACKEND del archivo variables.js
import { URL_BACKEND } from "./variables.js";
import { postRaza, putRaza } from "./services/raza-service.js";

const tbodyRazas = document.getElementById("tbody-razas");
const formRaza = document.getElementById("formRaza");
const inputNombre = document.getElementById("inputNombre");
const btnAccion = document.getElementById("btnAccion");

let modo = "crear";
let razas = [];
let razaGlobal = {};

// OBTENER LAS RAZAS
const getRazas = () => {
  fetch(`${URL_BACKEND}/raza`).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);

      // COPIAMOS EL ARREGLO
      razas = [...data];
      dibujarTabla();
    });
  });
};
getRazas();

// BOTON ONSUBMIT FORMULARIO
formRaza.onsubmit = (e) => {
  e.preventDefault();

  if (modo === "crear") {
    // TO DO: Validar el formulario
    let objRaza = {
      raza_nombre: inputNombre.value.trim(),
    };
    postRaza(objRaza).then((peticion) => {
      peticion.json().then((data) => {
        console.log(data);
        getRazas();
      });
    });
  } else {
    // entramos al modo editar
    let objRaza = {
      raza_id: razaGlobal.raza_id,
      raza_nombre: inputNombre.value,
    };
    putRaza(objRaza).then((peticion) => {
      peticion.json().then((data) => {
        console.log(data);
        getRazas();
        modoCrear();
      });
    });
  }
};

// MODO EDITAR
const modoEditar = (raza) => {
  razaGlobal = { ...raza };
  modo = "editar";
  btnAccion.innerText = "Guardar Cambios";
  inputNombre.value = razaGlobal.raza_nombre;
};

// MODO CREAR
const modoCrear = () => {
  razaGlobal = {};
  modo = "crear";
  btnAccion.innerText = "Crear Raza";
  inputNombre.value = "";
};

const dibujarTabla = () => {
  // borramos la tabla, si ya existiera
  tbodyRazas.innerHTML = "";

  razas.forEach((raza) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `  <td>${raza.raza_id}</td>
                      <td>${raza.raza_nombre}</td>`;
    let tdBotones = document.createElement("td");
    let btnEditar = document.createElement("button");
    let btnEliminar = document.createElement("button");

    btnEditar.classList.add("btn", "btn-warning", "mr-2");
    btnEditar.innerText = "Editar";
    btnEditar.onclick = () => {
      modoEditar(raza);
    };

    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.innerText = "Eliminar";

    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);

    tr.appendChild(tdBotones);
    tbodyRazas.appendChild(tr);
  });
};

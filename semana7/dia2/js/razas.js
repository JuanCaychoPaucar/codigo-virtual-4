// Si hubieran mas variables, se importan separados por coma.
// SIEMPRE Y CUANDO SEAN DEL MISMO ARCHIVO
// { URL_BACKEND, OTRA_VARIABLE, OTRA_MAS }

/**
 * COLOCAR EL type="module" en el HTML, de lo contrario no funcionara esta caracteristica
 */

// importamos la constante URL_BACKEND del archivo variables.js
import { URL_BACKEND } from "./variables.js";
import { postRaza, putRaza, deleteRaza } from "./services/raza-service.js";

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

    if (inputNombre.value === "") {
      // mostrar alerta
      console.log("campo vacio");

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre de raza no puede estar vacío!",
      });
    } else {
      let objRaza = {
        raza_nombre: inputNombre.value.trim(),
      };
      postRaza(objRaza).then((peticion) => {
        peticion.json().then((data) => {
          console.log(data);
          getRazas();
          modoCrear();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registro agregado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      });
    }
  } else {
    // entramos al modo editar

    if (inputNombre.value === "") {
      // mostrar alerta
      console.log("campo vacio");

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Nombre de raza no puede estar vacío!",
      });
    } else {
      // CONFIRMACION DE LA ACCION
      Swal.fire({
        title: "Desea guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Guardar`,
        denyButtonText: `No guardar`,
        cancelButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          let objRaza = {
            raza_id: razaGlobal.raza_id,
            raza_nombre: inputNombre.value,
          };
          putRaza(objRaza).then((peticion) => {
            peticion.json().then((data) => {
              console.log(data);
              getRazas();
              modoCrear();
              Swal.fire("Guardado!", "", "success");
            });
          });
        } else if (result.isDenied) {
          Swal.fire("Cambios no guardados", "", "info");
        } else {
          getRazas();
          modoCrear();
        }
      });
    }
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

const eliminarRaza = (objRaza) => {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Está seguro?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteRaza(objRaza).then((peticion) => {
          peticion.json().then((data) => {
            console.log(data);
            getRazas();

            swalWithBootstrapButtons.fire(
              "Eliminado!",
              "El registro a sido eliminado.",
              "success"
            );
          });
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        getRazas();
        swalWithBootstrapButtons.fire(
          "Cancelado",
          "El registro no ha sido eliminado",
          "error"
        );
      }
    });
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
    btnEliminar.onclick = () => {
      eliminarRaza(raza);
    };

    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);

    tr.appendChild(tdBotones);
    tbodyRazas.appendChild(tr);
  });
};

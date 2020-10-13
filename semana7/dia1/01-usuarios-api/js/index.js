const tablaCargando = document.getElementById("tabla-cargando");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const cargando = document.getElementById("cargando");

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// https://reqres.in/api/users?page=1
const endpoint = "https://reqres.in/api/users";
let page = 1;
let total_pages = "";

let usuarios = [];

const dibujarTabla = () => {
  let cadena = "";
  usuarios.forEach((usu) => {
    cadena += ` <tr>
                    <td class="align-middle">${usu.id}</td>
                    <td class="align-middle">${usu.email}</td>
                    <td class="align-middle">${usu.first_name}</td>
                    <td class="align-middle">${usu.last_name}</td>
                    <td class="align-middle text-center">
                        <img src="${usu.avatar}">
                    </td>
                </tr>`;
  });
  tablaCuerpo.innerHTML = cadena;
};

/**
 * FUNCION QUE TRAE LOS DATOS DEL ENDPOINT
 */
const getData = () => {
  // TO DO: colocar el texto o el efecto cargando ...
  cargando.removeAttribute("hidden");

  // TO DO: ocultar la tabla
  tablaCargando.setAttribute("hidden", true);

  // fetch("https://reqres.in/api/users?page=1").then
  fetch(`${endpoint}?page=${page}`).then((response) => {
    response.json().then((dataRecibida) => {
      //   console.log(data);
      total_pages = dataRecibida.total_pages;
      // console.log(`Total pages : ${total_pages}`);
      usuarios = dataRecibida.data;
      dibujarTabla();

      //TO DO: mostrar la tabla
      tablaCargando.removeAttribute("hidden");

      //TO DO: borrar el efecto cargando
      cargando.setAttribute("hidden", true);
    });
  });
};

// BOTONES
btnSiguiente.onclick = () => {
  if(page === total_pages){
    return;
  }
  page += 1;
  getData();
};

btnAnterior.onclick = () => {
  if (page === 1) {
    return;
  }

  page -= 1;
  getData();
};

// TRAEMOS LA DATA
getData();

/**
 * FETCH EXTENDIDO
 */

const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1";

fetch(url, {
  method: "GET",
  //   headers: {},
  //   body: "algo???",
}).then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

// EJEMPLO CON EL VERBO POST
// en este ejemplo creamos un usuario

// es recomendable madar el body con JSON.stringify
// "name": "Jorgito", "job": "CEO"

const urlPost = "https://reqres.in/api/users";
fetch(urlPost, {
  method: "POST",
  body: JSON.stringify({ name: "Jorgito", job: "CEO" }),
  headers: {
    "Content-Type": "application/json",
  },
}).then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

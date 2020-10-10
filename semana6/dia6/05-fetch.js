/**
 * fetch es una funcion que consume datos deun endpoint,
 * que es pasado como parámetro.
 * la funcion fetch retorna una promesa cuando el resultado esta listo para mostrar.
 */

// const promesaFetch = fetch("https://reqres.in/api/users");

// promesaFetch.then((respuesta) => {
//   // respuesta HTTP
//   console.log(respuesta);

//   // .json() nos devuelve una promesa, por tanto debemos hacerle un then
//   respuesta.json().then((data) => {
//     console.log(data);
//   });
// });

fetch("https://reqres.in/api/users").then((peticion) => {
  peticion.json().then((json) => {
    console.log(json);
  });
});

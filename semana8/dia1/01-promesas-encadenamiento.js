/**
 * ENCADENAMIENTO DE PROMESAS
 * Se utiliza con la finalidad de que el codigo no crezca identado a la derecha.
 * NOTA: Ocurre cuando consumo mas de una promesa a la vez.
 */

const encadenarPromesas = () => {
  fetch("https://reqres.in/api/users?page=2").then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
    });
  });
};

encadenarPromesas();
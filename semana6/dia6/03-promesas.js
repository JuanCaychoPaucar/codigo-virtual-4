/**
 * Una promesa es un OBJETO que sirve para esperar a que termine un PROCESO ASINCRONO
 * y depende de la respuesta del proceso asincrono de como se resuelva la promesa
 */

// Creando una promesa
// new Promise((resolve, reject)

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = 100;
    // yo necesito retornar el valor de x
    // resolve(x);
    // resolve, sirve para transmitir un valor a traves de la promesa, luego de que un proceso asincrono se haya ejecutado

    // reject("ocurrio un error");

    if (x % 2 === 0) {
      resolve(x);
    } else {
      reject("error, no es par");
    }
  }, 3000);
});

// Ejecutando una promesa
// then se ejecuta cuando la promesa invoca a la funcion resolve
// y en un callback recibo la respuesta
miPromesa
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });

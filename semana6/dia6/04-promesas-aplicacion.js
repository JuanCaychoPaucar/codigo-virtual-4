const buscarPorDni = (dni) => {
  let miPromesa = new Promise((resolve, reject) => {
    // simulamos proceso asincorno, con el setTimeout
    setTimeout(() => {
      let persona = {
        nombre: "Juanita",
        apellido: "Carpio",
      };
      resolve(persona);
    }, 3000);
  });

  return miPromesa;
};

let resultado = buscarPorDni("12345678");
resultado
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

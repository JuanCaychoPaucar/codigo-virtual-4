/**
 * Funcion para recibir el nombre de un pais introducido por
 * el usuario y mostrar:
 * Total de casos
 * Total de recuperados
 * Total de fallecidos
 */

//funcion con for
const mostrarDataPorPais = (pais) => {
  for (let c = 0; c < covid.length; c++) {
    if (covid[c].country === pais) {
      //   console.log(covid[c]);
      let encontrado = {
        nombrePais: covid[c].country,
        totalCasos: covid[c].cases,
        totalRecuperados: covid[c].recovered,
        totalFallecidos: covid[c].deaths,
      };
      console.log(encontrado);
      return; //finaliza toda la funcion
    }
  }
  console.log("Fin de la funcion"); //con el return ya no se ejecuta nunca esta linea
};

//funcion con find
const mostrarDataPorPaisV2 = (pais) => {
  const paisEncontrado = covid.find((estadistica) => {
    if (estadistica.country === pais) {
      return estadistica;
    }
  });
  console.log(paisEncontrado);
};

mostrarDataPorPais("Brazil");
mostrarDataPorPaisV2("Peru");

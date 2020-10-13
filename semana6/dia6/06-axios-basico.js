/**
 *AXIOS siempre devuelve el resultado en .data
 en el ejemplo seria:  resultado.data
 */

//get nos retorna una promesa
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=105eb79aa1e6df60a2b95878ad2289aa&language=es-ES&page=1").then((resultado) => {
  console.log(resultado);

  // solo data
  console.log("DATA");
  console.log(resultado.data);
});

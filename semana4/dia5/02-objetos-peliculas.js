/**
 * Funcion para crear un segundo arreglo de peliculas
 * que contengan solamente el titulo, fecha de lanzamiento y la sinopsis.
 * Al final imprimir el arreglo
 */

const peliculasResumen = () => {
  const resumenes = peliculas.map((pelicula) => {
    //retorna objeto implicito
    return {
      titulo: pelicula.title,
      estreno: pelicula.release_date,
      sinopsis: pelicula.overview,
    };
  });
  console.log(resumenes);
};

// peliculasResumen();

/**
 * Funcion para filtrar y mostrar en un nuevo arreglo
 * todas las peliculas en idioma español.
 */

const peliculasLatinas = () => {
  const pelisFiltradas = peliculas.filter((pelicula) => {
    if (pelicula.original_language === "es") {
      return pelicula;
    }
  });
  console.log(pelisFiltradas);
};

// peliculasLatinas();

/**
 * Funcion que retorne un genero dado el ID del genero
 */

/**
 * la funcion find retorna el primer elemento (todo el objeto) que coincida con la condicion
 * o el patron de busqueda (hablamos del if).
 * Si hubiera mas de una coincidencia, de todas formas
 * la funcion find solo retornara la primera coincidencia.
 * Si no existen coincidencias se retorna "undefined"
 */

const searchGenreById = (id) => {
  const generoEncontrado = generos.find((genero) => {
    if (genero.id === id) {
      return genero;
    }
  });

  //si el genero encontrado existe, sera diferente de undefined
  if (generoEncontrado) {
    return generoEncontrado.name;
  } else {
    return null;
  }
};

// console.log(searchGenreById(1));

/**
 * Funcion que imprime un nuevo arreglo de peliculas,
 * donde cada pelicula tendra:
 * titulo, sinopsis, estreno, generos
 *
 * HINT: usar la funcion searchGenreById()
 */

const resumenPeliculasConGeneros = () => {
  const peliculasResumen = peliculas.map((peli) => {
    // crear un arreglo de generos de acuerdo
    // a la pelicula en que me encuentre iterando
    const generosStrings = peli.genre_ids.map((idGenero) => {
      let nombre = searchGenreById(idGenero);
      return nombre;
    });

    let objPeliResumen = {
      titulo: peli.title,
      sinopsis: peli.overview,
      estreno: peli.release_date,
      generos: generosStrings,
    };
    return objPeliResumen;
  });
  console.log(peliculasResumen);
};

resumenPeliculasConGeneros();

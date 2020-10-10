/**
 * DESTRUCTURACION DE OBJETOS
 */

let mascota = {
    nombre: "Kyra",
    raza: "Bull Terrier",
    edad: 1,
};

// let nombre = mascota.nombre;
// console.log(nombre);

/**
 * obligatorio colocar el mismo nombre de la variable de la propiedad a la variable que destructura.
 * No importa el orden como en el caso de los arreglos
 */
let { edad, nombre } = mascota;
console.log(nombre);
console.log(edad);

// destructurar un atributo modificando el nombre de la nueva variable

// EJEMPLO
// Dado un objeto de tipo pelicula (estructura THE MOVIE DB)

let pelicula = {
    popularity: 1578.677,
    vote_count: 1691,
    video: false,
    poster_path: "/8STWO9pUTqubPV04iXZ2R6SClME.jpg",
    id: 497582,
    adult: false,
    backdrop_path: "/kMe4TKMDNXTKptQPAdOF0oZHq3V.jpg",
    original_language: "en",
    original_title: "Enola Holmes",
    genre_ids: [80, 18, 9648],
    title: "Enola Holmes",
    vote_average: 7.7,
    overview:
        "Enola Holmes, una intrépida joven que busca a su madre, utiliza su brillante instinto investigador para superar a su hermano Sherlock y ayudar a un lord en su fuga.",
    release_date: "2020-09-23",
    pais: {
        lugar: "Estados Unidos",
        lat: -12.15321,
        lng: -54.353,
    },
};

const imprimirSinopsis = ({ overview, title }) => {
    //la funcion recibe el "overview" destructurado del objeto de tipo pelicula
    // VENTAJA: uso directamente la variable "overview"
    // DESVENTAJA: pierdo el acceso a los demas atributos
    console.log(overview);
    console.log(title);
};

imprimirSinopsis(pelicula);

// ejemplo destructurar la longitud del objeto pelicula
// lng : nuevaLongitud, significa que estamos RENOMBRANDO lng como nuevaLongitud

//destructurar pais y la longitud con una nueva variable de nombre "nuevaLongitud"
let { pais, pais: {lng : nuevaLongitud} } = pelicula;
console.log("Longitud");
console.log(nuevaLongitud);

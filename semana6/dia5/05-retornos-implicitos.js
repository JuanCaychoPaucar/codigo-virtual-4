/**
 * Formas modernas y reducidas de retornar valores en funciones
 */

// forma tradicional
const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(50, 15));

// forma reducida
//aclaracion: si la funcion tiene una sola linea de desarrollo, el retornoes implicito si lo colocamos entre ()
// => (a + b);
const sumarReducida = (a, b) => a + b;
console.log(sumarReducida(40, 20));

//FORMA REDUCIDA DE HACER FILTER
let nombres = [
  "jorge",
  "juan",
  "mariel",
  "jeremias",
  "vladimir",
  "jesus de ley",
];

// filtar todos los nombres que inicien con la letra j

// fomra tradicional

let filtroTradiconal = nombres.filter((n) => {
  if (n.charAt(0) === "j") {
    return n;
  }
});

console.log(filtroTradiconal);

// forma reducida
let filtroReducido = nombres.filter((n) => n.charAt(0) == "j");

console.log(filtroReducido);
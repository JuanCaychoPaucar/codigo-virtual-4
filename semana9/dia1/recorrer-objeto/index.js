let objProducto = {
  nombre: "Smartphone",
  marca: "Xiaomi",
  modelo: "Mate 10 Pro",
  caracteristicas: {
    color: "Azul",
    imei: "1520215651325",
    ram: "6gb",
    memoria: "128gb",
  },
};

/**
 * Ciclo for in
 * Se utiliza para recorrer un OBJETO
 * "clave" es como si fuera el iterador (como cuando hacemos un forEach de un arreglo)
 *
 */

console.log(
  "se imprimen los atributos del objeto, pero NO sus valores internos. Son STRING"
);
for (const clave in objProducto) {
  console.log(clave);
}

console.log("\nse imprimen los atributos del objeto, y sus valores internos.");
for (const clave in objProducto) {
  console.log(clave + ": " + objProducto[clave]);
}

console.log(
  "\nse imprimen los atributos del objeto con la primera letra en mayuscula, y sus valores internos."
);
for (const clave in objProducto) {
  // primera posicion (0) a Mayuscula y el resto se concatena desde la posicion (1)
  let claveMostrar = clave.charAt(0).toUpperCase() + clave.substring(1);
  console.log(claveMostrar + ": " + objProducto[clave]);
}

for(const clave in objProducto.caracteristicas){
  console.log(clave + ": " + objProducto.caracteristicas[clave]);
}

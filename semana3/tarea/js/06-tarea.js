/**
 * Se requiere determinar la hipotenusa de un triángulo rectángulo.
 * ¿Cómo sería el diagrama de flujo y el pseudocódigo que representen
 * el algoritmo para obtenerla? Recuerde que por Pitágoras se tiene
 * que: C2 = A2 + B2.
 */

 let cateto1 = +prompt("Ingrese cateto A");
 let cateto2 = +prompt("Ingrese cateto B");
 let hipotenusa = ((cateto1)**2 + (cateto2**2))**(1/2);

 console.log("TEOREMA DE PITAGORAS");
 console.log(`cateto A = ${cateto1}`);
 console.log(`cateto B = ${cateto2}`);
 console.log(`hipotenusa C = ${hipotenusa}`);
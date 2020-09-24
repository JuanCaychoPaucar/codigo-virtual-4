/*
Un profesor tiene un salario inicial de $1500, y recibe un incremento
de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6
años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el
algoritmo y represente la solución mediante el diagrama de flujo, el
pseudocódigo y el diagrama N/S, utilizando el ciclo apropiado.
 */

let sueldo = 1500;
console.log(`Sueldo inicial = ${sueldo}`);

for (let i = 1; i <= 6; i++) {
  sueldo = sueldo + sueldo * 0.1;
  console.log(`Sueldo al año ${i} = ${sueldo}`);
}

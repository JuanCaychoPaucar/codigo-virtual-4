/**
 * OPERADORES LOGICOS
 * && and y
 * || or o
 * ! not negacion
 */

const nro1 = 24;
const nro2 = 40;
const nro3 = 35;

if (nro1 > nro2 && nro1 > nro3) {
  console.log(`El mayor es el ${nro1}`);
} else {
  if (nro2 > nro1 && nro2 > nro3) {
    console.log(`El mayor es el ${nro2}`);
  }else{
    console.log(`El mayor es el ${nro3}`);
  }
}

/**
 * date es la clase o tipo de dato que nos ayudara a trabajar con fechas.
 */

let hoy = new Date(); //esta es la hora del front, osea de la PC. No es recomendable usarla para transacciones
console.log(hoy);

/**
 * Obtener el año de una fecha
 * year.getFullYear;
 */
let anio = hoy.getFullYear();
console.log(anio);

/**
 * fecha.getMonth();
 * Retorna el numero de mes que corresponda en el calendario,
 * donde 0 es Enero
 */

let mes = hoy.getMonth();
console.log(mes);

/**
 * fecha.getDate();
 * Retorna el numero del dia del mes
 */

let diaMes = hoy.getDate();
console.log(diaMes);

/**
 * fecha.getDay();
 * Retorna el numero de dia de la semana,
 * donde 0 es Domingo
 */

let diaSemana = hoy.getDay();
console.log(diaSemana);

let horas = hoy.getHours();
let minutos = hoy.getMinutes();
let segundos = hoy.getSeconds();
let milisegundos = hoy.getMilliseconds();

console.log(`hora actual = ${horas}`);
console.log(`minutos actual = ${minutos}`);
console.log(`segundos actual = ${segundos}`);
console.log(`milisegundos actual = ${milisegundos}`);

/**
 * ¿Como inicializo un objeto DATE con una fecha distinta?
 */

let halloween2020 = new Date(2020, 9, 31);
console.log(halloween2020);

let halloweenMenosHoy = halloween2020 - hoy;
console.log(halloweenMenosHoy); //la resta es en milisegundos

let diasParaHalloween = (((halloweenMenosHoy / 1000) / 60) / 60) / 24;

/**
 * numero.toFixed(cantidad_de_decimales)
 * retorna el numero redondeado a una cantidad_de_decimales
 * pasada como parametro
 */
console.log(`Dias para halloween: ${diasParaHalloween.toFixed(2)}`);

/**
 * Inicializar una fecha en formato UNIX
 * new Date(milisegundos) (milisegundos desde UNIX (1 enero 1970))
 */

 let fechaPronostico = new Date(1601143200 * 1000);
 console.log(fechaPronostico);

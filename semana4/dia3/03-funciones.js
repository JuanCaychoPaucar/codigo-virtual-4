/**
 * una funcion es un conjunto de lineas de codigo que se ejecutaran
 * cuando sean invocadas, no antes, no despues.
 */

function tablaDel5() {
  for (let c = 0; c <= 10; c++) {
    console.log(`5 x ${c} = ${c * 5}`);
  }
}

/**
 * Una funcion no se ejecuta hasta que se la invoque.
 * Puede ser invocada N veces
 * El codigo es reutilizable
 */

tablaDel5();

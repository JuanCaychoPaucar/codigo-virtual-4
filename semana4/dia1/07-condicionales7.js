let sueldoSemanal = 0;
let horasTrabajadas = 42;
let pagoHora = 35;

if (horasTrabajadas > 40) {
  sueldoSemanal = 40 * pagoHora + (horasTrabajadas - 40) * 2 * pagoHora;
} else {
  sueldoSemanal = horasTrabajadas * pagoHora;
}

console.log(`Total a pagar ${sueldoSemanal} por la semana cumplida 💰💰`);
/**
 * Creando una función exportable individualmente
 */

export const Persona = (nombre, apellido, edad, dni) => {
  return {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    dni: dni,
    // la palabra reservada this, hace referencia al objeto en el que es usado,
    // y con ella se puede acceder a los diferentes atributosque tiene el objeto.
    asignarEdad: function (nuevaEdad) {
      this.edad = nuevaEdad;
    },
  };
};

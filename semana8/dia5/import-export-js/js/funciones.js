/**
 * Crear una funcion exportable individualmente
 */

export const saludar = () => {
  console.log("Hola, bienvenidos a todos");
};

const despedida = () => {
  console.log("Este es un mensaje de despedida");
};

/**
 * export default, exporta un elemento  (ejem: variable, clase, funcion, etc),
 * que cuando sea importado en otro archivo, puede ser renombrado.
 * NOTA: Solo puede haber un export default por cada archivo JS
 */
export default despedida;

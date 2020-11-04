/**
 * ContadorReducer es una funcion de tipo reducer,
 * lo que hace es recibir 2 parametros:
 * 
 * @param {*} estadoActual el state actual
 * @param {*} action la data que me envia la funcion que intenta modificar el state (en este caso "dispatch")
 * 
 * COMENTARIO:
 * El reducer es quien toma la descion de modificar o no una variable de estado.
 * 
 * IMPORTANTE:
 * Cualquier cosa que retorne el reducer, sera el nuevo state de la aplicacion.
 */
const ContadorReducer = (estadoActual, action) => {
    if (action.type === "SUMAR") {
        return estadoActual + 1;
    }
    if (action.type === "RESTAR") {
        return estadoActual - 1;
    }
    return estadoActual;
};

export default ContadorReducer;
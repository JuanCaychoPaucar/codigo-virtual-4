const MesaReducer = (stateActual, action) => {

    switch (action.type) {
        case "SELECCIONAR_MESA":
            return {
                ...stateActual,
                globalObjMesa: { ...action.data },
            }

        case "SELECCIONAR_CATEGORIA":
            return {
                ...stateActual,
                globalObjCategoria: { ...action.data },
            }

        case "ACTUALIZAR_GLOBAL_PEDIDOS":
            return {
                ...stateActual,
                globalPedidos: [ ...action.data ],
            }
    }
};

export default MesaReducer;

/**
 * stateActual, es el estado actual de la variable de estado que se quiere modificar, que viene del MesaState.
 * action, es lo que se recibe del dispatch que se encuentra en MesaState.
 * TODO lo que retorna MesaReducer es el nuevo valor o valor de reemplazo de mi variable de estado.
 */
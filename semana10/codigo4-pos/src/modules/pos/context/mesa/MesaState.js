import React, { useReducer } from 'react'
import MesaContext from './MesaContext';
import MesaReducer from './MesaReducer';

const MesaState = (props) => {

    const [state, dispatch] = useReducer(MesaReducer, {
        globalObjMesa: null,
        globalObjCategoria: null,
        globalPedidos: [],
    });

    // funcion que se ejecutara con el boton +1 de cualquier plato
    const agregarPlato = (objPlato) => {

        // desestructurando state
        const { globalObjMesa, globalPedidos } = state;

        //verificar que tenemeos una mesa seleccionada globalmente
        if (globalObjMesa === null) return;

        // obtener el pedido actual que pertenece a la mesa global seleccionada en el arreglo global pedidos
        const pedidoActual = globalPedidos.find(objPedido => objPedido.mesa_id === globalObjMesa.mesa_id);

        // preguntamos si el pedido actual existe, es decir, que la mesa global seleccionada tenga unpedido previamnete en nuestro arreglo "globalPedidos"
        if (pedidoActual) {
            // la mesa global seleccionada,ya tenia un pedido

        } else {
            //la mesa global seleccionada, no tenia un pedido. Estaba vacia.
            // Por tanto, debemos de crear el pedido nuevo, en el arreglo global de epedidos con la mesa global seleccionada y el plato "objPlato" con cantidad = 1
            const nuevoGlobalPedidos = [
                ...globalPedidos,
                {
                    total: objPlato.plato_pre,
                    mesa_id: globalObjMesa.mesa_id,
                    platos: [
                        {
                            ...objPlato,
                            plato_cantidad: 1,
                        },
                    ],
                },
            ];
            dispatch({
                type: "ACTUALIZAR_GLOBAL_PEDIDOS",
                data: nuevoGlobalPedidos,
            });
        }

    };

    const seleccionarMesaGlobal = (objMesa) => {
        dispatch({
            type: "SELECCIONAR_MESA",
            data: { ...objMesa },
        });
    };

    const seleccionarCategoriaGlobal = (objCategoria) => {
        dispatch({
            type: "SELECCIONAR_CATEGORIA",
            data: { ...objCategoria },
        });
    };

    return (
        <MesaContext.Provider value={{
            globalObjMesa: state.globalObjMesa,
            globalObjCategoria: state.globalObjCategoria,
            globalPedidos: state.globalPedidos,
            seleccionarMesaGlobal: seleccionarMesaGlobal,
            seleccionarCategoriaGlobal: seleccionarCategoriaGlobal,
            agregarPlato: agregarPlato,
        }}>

            {props.children}

        </MesaContext.Provider>
    )
}

export default MesaState;

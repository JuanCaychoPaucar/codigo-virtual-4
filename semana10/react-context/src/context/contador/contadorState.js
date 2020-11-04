/** 
 * PASO 2: Crear un State
 * El State sera un componente.
 * 
 * Un contexto comparte un estado global.
 */

import React, { useReducer } from 'react';
import ContadorContext from './ContadorContext';
import ContadorReducer from './ContadorReducer';

const ContadorState = (props) => {

    // ahora se utiliza useReducer. En este caso el contador global inicia en 0.
    // ContadorReducer es la funcion que se ejecuta antes de realizar el cambio de estado. Solo ContadorReducer puede realizar dicho cambio.
    // dispatch le indica a ContadorReducer que quiere cambiar el estado.
    const [state, dispatch] = useReducer(ContadorReducer, 0);


    const restar = () => {
        // en dispatch siempre mandamos un OBJETO
        dispatch({
            type: "RESTAR",
        });
    };

    const sumar = () => {
        dispatch({
            type: "SUMAR",
        });
    };

    // NO retornamos una vista, sino un CONTEXTO
    return (
        // Siempre es .Provider
        // dentro de value se coloca lo que se quiere proveeer a todos los componentes que va a encerrar
        // value viene siendo un objeto
        <ContadorContext.Provider value={{
            cuenta: state,
            sumar: sumar,
            restar: restar,
        }}>
            {props.children}
            {/* para que nos muestre a todos los HIJOS que se mandaron como props a traves del STATE*/}

        </ContadorContext.Provider>
    )
}

export default ContadorState;


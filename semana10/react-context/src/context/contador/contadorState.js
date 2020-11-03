import React, { useReducer } from 'react';
import ContadorContext from './contadorContext';
import ContadorReducer from './contadorReducer';

const ContadorState = (props) => {

    const [state, dispatch] = useReducer(ContadorReducer, 0);


    const restar = () => {
        dispatch({
            type: "RESTAR",
        });
    };

    const sumar = () => {
        dispatch({
            type: "SUMAR",
        });
    };


    return (
        // Siempre es .Provider
        // dentro de vaule se coloca lo que se quiere proveeer
        <ContadorContext.Provider value={{
            cuenta: state,
            sumar: sumar,
            restar: restar,
        }}>
            {props.children}
        </ContadorContext.Provider>
    )
}

export default ContadorState;

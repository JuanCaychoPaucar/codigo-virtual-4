import React, { useEffect, useReducer } from 'react';
import { verificarToken } from '../../../services/authServices';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const AuthState = (props) => {

    const [state, dispatch] = useReducer(AuthReducer, {
        autenticado: false,
        usu_nom: null,
        usu_id: null,
        token: null,
        cargando: true,
    });

    const iniciarSesionConLocalStorage = () => {
        const token = localStorage.getItem("token");

        if (token) {
            // verificar el token con el backend
            verificarToken(token).then(data => {
                console.log(data);

                if (data.ok) {
                    const payload = token.split(".")[1];
                    const payloadDesencriptado = window.atob(payload);
                    const payloadJSON = JSON.parse(payloadDesencriptado);

                    dispatch({
                        type: "INICIAR_SESION",
                        data: {
                            ...payloadJSON,
                            token: token,
                        },
                    });
                } else {
                    dispatch({
                        type: "CERRAR_SESION",
                    });
                }

            });
        } else {
            dispatch({
                type: "CERRAR_SESION",
            });
        }
    };

    useEffect(() => {
        iniciarSesionConLocalStorage();
    }, []);

    /**
     * Funcion que sera llamada desde el formulario, luego de que el iniciode sesionsea correcto.
     * Esta funcionrecibira el token y actualizara el estado global conla informacion del usuario
     */
    const iniciarSesion = (token) => {
        /**
         * la funcion split devuelve un arreglo de subcadenas dado el separador
         * ejem:
         * 1235dfdfdf.dgfgfgd.sdde
         * resultado: ["1235dfdfdf", "dgfgfgd", "sdde"]
         */

        const payload = token.split(".")[1];
        // console.log(token);
        // console.log(payload);

        // vamos a desencriptar el payload que esta en base-64
        // window.atob("cadenaencriptada") desencripta una cadena en base-64

        const payloadDesencriptado = window.atob(payload);
        console.log(payloadDesencriptado);

        const payloadJSON = JSON.parse(payloadDesencriptado);
        console.log(payloadJSON);

        localStorage.setItem("token", token);

        dispatch({
            type: "INICIAR_SESION",
            data: {
                ...payloadJSON,
                token: token,
            },
        });
    };

    const cerrarSesion = () => {
        dispatch({
            type: "CERRAR_SESION",
        });
    };



    return (
        <AuthContext.Provider value={{
            usu_nom: state.usu_nom,
            usu_id: state.usu_id,
            autenticado: state.autenticado,
            cargando: state.cargando,
            iniciarSesion: iniciarSesion,
            cerrarSesion: cerrarSesion,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState;

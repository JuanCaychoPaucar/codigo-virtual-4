import React, { useContext, useState } from 'react';
import { postLogin } from '../../../../services/authServices';
import AuthContext from '../../context/AuthContext';

const AuthLoginScreen = ({ history }) => {

    // history nos ayuda a navegar por el hisotrial de las paginas

    const { iniciarSesion } = useContext(AuthContext);

    const [formulario, setFormulario] = useState({
        correo: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        postLogin(formulario.correo, formulario.password).then(data => {
            // console.log(data);

            if (data.ok) {
                // TODO llamar a iniciarSesion del context y enviarle el token
                iniciarSesion(data.token);

                history.push("pos/control");
            }
        });
    };

    return (
        <main className="login">
            <div className="login__form">
                <h1>Inicio de Sesión</h1>
                <form className="formulario" onSubmit={onSubmit}>
                    <label htmlFor="">Email:</label>
                    <input
                        type="email"
                        className="formulario__input"
                        placeholder="Email"
                        name="correo"
                        value={formulario.correo}
                        onChange={handleChange}
                    />

                    <label htmlFor="">Password:</label>
                    <input
                        type="password"
                        className="formulario__input"
                        placeholder="Password"
                        name="password"
                        value={formulario.password}
                        onChange={handleChange}
                    />

                    <button className="formulario__submit" type="submit">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </main>
    )
}

export default AuthLoginScreen;

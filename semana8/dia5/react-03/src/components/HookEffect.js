import React, { useState, useEffect } from "react";

const HookEffect = () => {
    console.log("Ejecutando componente HookEffect");

    const [contador, setContador] = useState(0);
    const [iterador, setIterador] = useState(0);
    const [type, seTtype] = useState(1);

    const hacerFetch = () => {
        console.log(`https://pokeapi.co/api/v2/type/${type}`);
    };

    /**
        useEffect es un hook que reibe 2 parametros.
    
        1. callback, en el cual vamos a colocar el codigo que querramos que se ejecute. Independientemente del cambio de las variables de estado.
        2. Arreglo de dependencias.
        - Si el arreglo esta vacio, el codigo dentro del useEffect solo se ejecutará una sola vez.
        - En el arreglo podemos mandar variables que cuando modifiquen su valor, el contenido del useEffect se volverá a ejecutar.
    
        NOTA:
        useEffect se ejecuta como minimo 1 vez (la vez que el componente se cargue).
        Pueden haber varios useEffect en un mismo componente.
       */

    useEffect(() => {
        hacerFetch();
    }, [type]);

    const sumarContador = () => {
        setContador(contador + 1);
    };

    const restarContador = () => {
        setContador(contador - 1);
    };

    const sumarIterador = () => {
        setIterador(iterador + 1);
    };

    const restarIterador = () => {
        setIterador(iterador - 1);
    };

    const modificarTipo = (nuevoTipo) => {
        seTtype(nuevoTipo);
    };

    return (
        <div>
            <h4>Contador: {contador}</h4>
            <button onClick={() => { restarContador(); }}>-1</button>
            <button onClick={() => { sumarContador(); }}>+1</button>

            <hr />

            <h4>Iterador: {contador}</h4>
            <button onClick={() => { restarIterador(); }}>-1</button>
            <button onClick={() => { sumarIterador(); }}>+1</button>

            <hr />

            <button onClick={() => { modificarTipo(2) }}>Tipo Roca</button>
            <button onClick={() => { modificarTipo(3) }}>Tipo Hielo</button>
            <button onClick={() => { modificarTipo(4) }}>Tipo Electrico</button>
        </div>
    );
};

export default HookEffect;

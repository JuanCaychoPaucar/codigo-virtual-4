import { URL_BACKEND } from "../environments/environments";

export const getPlatos = async () => {
    const peticion = await fetch(`${URL_BACKEND}/plato`);
    const data = await peticion.json();
    return data;
};

export const postPlatoSinImagen = async (objPlato) => {
    const peticion = await fetch(`${URL_BACKEND}/plato`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(objPlato),
    });

    const data = await peticion.json();
    return data;
};

export const postImagenByPlatoId = async (plato_id, archivo) => {

    // creamos unformulario dentro de uan variable
    // plato_id e imagen son las llaves que recibira el backend
    let formData = new FormData();
    formData.append("plato_id", plato_id);
    formData.append("imagen", archivo);

    const peticion = await fetch(`${URL_BACKEND}/imagen/upload`, {
        method: "POST",
        body: formData,
    });
    
    const data = await peticion.json();
    return data;
};
import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

// GET TIPOS
export const getTipos = async () => {
  const resultado = await axios.get(`${URL_BACKEND}/tipo`);
  return resultado.data;
};

// POST TIPO
export const postTipo = async (objTipo) => {
  const resultado = await axios.post(
    `${URL_BACKEND}/tipo`,
    JSON.stringify(objTipo),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return resultado.data;
};

// PUT TIPO
export const putTipo = async (objTipo) => {
  const respuesta = await axios.put(
    `${URL_BACKEND}/tipo/${objTipo.tipo_id}`,
    JSON.stringify(objTipo),
    {
      headers: {
        "Content-type": "Application/json",
      },
    }
  );
  return respuesta;
};

// DELETE TIPO
export const deleteTipoPorId = async (id) => {
  const peticion = await axios.delete(`${URL_BACKEND}/tipo/${id}`, {
    method: "DELETE",
  });
  return peticion;
};

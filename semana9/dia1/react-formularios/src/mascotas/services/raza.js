import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

// GET RAZAS
export const getRazas = async () => {
  const resultado = await axios.get(`${URL_BACKEND}/raza`);
  return resultado.data;
};

// POST RAZA
export const postRaza = async (objRaza) => {
  const resultado = await axios.post(
    `${URL_BACKEND}/raza`,
    JSON.stringify(objRaza),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return resultado.data;
};

// PUT RAZA
export const putRaza = async (objRaza) => {
  const respuesta = await axios.put(
    `${URL_BACKEND}/raza/${objRaza.raza_id}`,
    JSON.stringify(objRaza),
    {
      headers: {
        "Content-type": "Application/json",
      },
    }
  );
  return respuesta;
};

// DELETE RAZA
export const deleteRazaPorId = async (id) => {
  const peticion = await axios.delete(`${URL_BACKEND}/raza/${id}`, {
    method: "DELETE",
  });
  return peticion;
};

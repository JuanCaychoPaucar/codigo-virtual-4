import React, { useEffect, useState } from "react";
import { URL_BACKEND } from "./environments/environments";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./pokeapi/Header";
import Tipos from "./pokeapi/Tipos";
import Pokemones from "./pokeapi/Pokemones";
// Para probar el uso del hook useEffect, quitar el comentario de la siguiente linea y llamar al componente HookEffect
// import HookEffect from "./components/HookEffect";

const App = () => {
  const [pokemones, setPokemones] = useState([]);
  // const [url, setUrl] = useState(`${URL_BACKEND}/type/1/`); // por defecto mostramos los pokemones type 1
  const [url, setUrl] = useState("");

  const modificarUrl = (nuevaUrl) => {
    // console.log("nuevaUrl " + nuevaUrl);
    setUrl(nuevaUrl);
  };

  const llamarUrl = async () => {
    const peticion = await fetch(url);
    const data = await peticion.json();

    const arregloPokemones = data.pokemon.map((registro) => {
      return { ...registro.pokemon };
    });

    setPokemones(arregloPokemones);
  };

  useEffect(() => {
    if (url !== "") {
      llamarUrl();
    }
  }, [url]);

  return (
    <>
      <Header />
      <main className="container-fluid mt-5">
        <div className="row">
          <Tipos modificarUrl={modificarUrl} url={url} />
          <Pokemones pokemones={pokemones} />
        </div>
      </main>
    </>
  );
};

export default App;

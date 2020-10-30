import React from "react";

const NotFound = (props) => {
  // Todo componente renderizado por una ruta (>Route><Route/>) recibe por defecto parametros de navegacion en las props.
  const goHome = () => {
    // console.log(props);
    // history.push("[ruta del destino]"), redirecciona a la pagina que responda a la ruta mencionada.
    // NOTA: Deja historial, (es decir, la posibilidad de IR ATRAS)
    // history.replace("[ruta del destino]"), NOTA: NO deja historial (NO se puede IR ATRAS)
    props.history.push("/");
  };

  return (
    <main className="container text-center">
      <h1 className="display-2 text-center mt-5">
        Ups! La pagina a la que intentas acceder, no existe.
      </h1>
      <hr />
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          goHome();
        }}
      >
        Ir a la pagina principal
      </button>
    </main>
  );
};

export default NotFound;

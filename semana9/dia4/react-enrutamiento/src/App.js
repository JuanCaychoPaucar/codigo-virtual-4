import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import NotFound from "./screens/404/NotFound";
import Citas from "./screens/citas/Citas";
import Home from "./screens/home/Home";
import Mascotas from "./screens/mascotas/Mascotas";
import MascotaVer from "./screens/mascotas/MascotaVer";
import Razas from "./screens/razas/Razas";
import Tipos from "./screens/tipos/Tipos";

const App = () => {
  return (
    // Roter > componente de envoltura para activar el sistema de enrutamiento
    <Router>
      <Header />

      {/* Switch > componente de envoltura para las diferentes rutas que se van a mostrar 
          NOTA: No se van a mostrar al mismo tiempo
      */}
      <Switch>
        {/* path, lo que va despues del dominio */}
        {/* Route > componente que indica la ruta y el componente que se va a renderizar a partir del  localhost:300/  
          LAS RUTAS SE COLOCAN DE LAS MAS ESPECIFICAS A LAS MAS GENERALES. (arriba la ruta grande y debajo la ma pequeña)

          El orden de las rutas del componente Route, deben estar ordenadas demas especifcas a mas generales

          Donde:
          /           es mas general que     /mascotas

          /mascotas   es mas general que     /mascotas/crear

        */}
        {/* <Route path={"/mascotas/crear"} component={nombre_componente} /> */}
        <Route path={"/mascotas/:mascota_id"} component={MascotaVer} />
        <Route path={"/mascotas"} component={Mascotas} />
        <Route path={"/razas"} component={Razas} />
        <Route path={"/tipos"} component={Tipos} />
        <Route path={"/citas"} component={Citas} />

        {/* la siguiente ruta (/) indica que el componente Home respondera solo cuando la direccion este con el valor localhost:3000   */}
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;

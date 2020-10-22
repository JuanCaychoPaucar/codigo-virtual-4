import React from "react";
import Articulo from "./Articulo";

// si no se recibe el blog, por defecto le colocamos un arreglo vacio: { blog = [] }
const Articulos = ({ blog = [] }) => {
  // console.log(props.blog);
  return (
    <div className="articulos">
      <h3>También te puede interesar</h3>
      {blog.map((art) => (
        <Articulo key={art.id} art={art} />
      ))}
    </div>
  );
};

export default Articulos;

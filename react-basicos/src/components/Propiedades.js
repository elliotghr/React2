import React from "react";
import propTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "falso"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.funcion(10)}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReact}</li>
      </ul>
    </div>
  );
}
// Objeto para definir propiedades por defecto (si las necesitamos)
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

// Para definir caracteristicas que necesite
// Como que sea un numero, string, boolean o que sea requerido
Propiedades.propTypes = {
  numero: propTypes.number.isRequired,
};

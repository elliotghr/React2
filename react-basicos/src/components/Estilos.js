import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%",
  };
  return (
    <section className="estilos">
      <h2>Estilos CSS en React</h2>
      <h3 className="bg-react">Estilos en hoja css externa</h3>
      {/* <h3 style={{ color: "purple", fontWeight: "900" }}>Estilos en linea</h3> */}
      <h3 className="bg-react" style={myStyles}>
        Estilos en linea
      </h3>
      <h3 className="bg-react" style={myStyles}>
        Agregar Normalize en el index.css con <code>@import-normalize;</code>{" "}
      </h3>
      <h3 className={moduleStyles.error}>Estilos con modulos</h3>
      <h3 className={moduleStyles.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos con SASS</h3>
    </section>
  );
}

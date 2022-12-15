import React, { useState } from "react";
import SelectList from "./SelectList";

const SelectsAnidados = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN = "7d5aa108-5eb9-49f3-80ed-a149cc9dfe6c";
  // https://api.copomex.com/documentacion/inicio
  // https://api.copomex.com/panel/proyectos/detalles/7d5aa108-5eb9-49f3-80ed-a149cc9dfe6c?tipo_grafica=diaria

  return (
    <div>
      <h2>Selects Anidados</h2>
      <h3>México</h3>
      <SelectList
        title="estado"
        // url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        url={`https://api.copomex.com/query/get_estados?token=${"pruebas"}`}
        handleChange={(e) => {
          setState(e.target.value);
        }}
      ></SelectList>
      {state && (
        <SelectList
          title="municipios"
          // url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas`}
          handleChange={(e) => {
            setTown(e.target.value);
          }}
        ></SelectList>
      )}
      {town && (
        <SelectList
          title="colonia"
          // url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=pruebas`}
          handleChange={(e) => {
            setSuburb(e.target.value);
          }}
        ></SelectList>
      )}
      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default SelectsAnidados;

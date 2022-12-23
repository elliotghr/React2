import React, { useState, useEffect } from "react";
import SelectsSel from "./SelectsSel";

const SelectsAn = () => {
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [colonia, setColonia] = useState("");

  const TOKEN = "9393c8cf-ee4d-4c53-a822-bc081a10a04b";

  return (
    <div>
      <h2>SelectsAn</h2>
      <div>
        <SelectsSel
          title="Estado"
          url={`https://api.copomex.com/query/get_estados?token=${"pruebas"}`}
          handleChange={(e) => setEstado(e.target.value)}
        ></SelectsSel>
        {estado && (
          <SelectsSel
            title="Municipios"
            url={`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${"pruebas"}`}
            handleChange={(e) => setMunicipio(e.target.value)}
          ></SelectsSel>
        )}
        {municipio && (
          <SelectsSel
            title="Colonia"
            url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipio}?token=${"pruebas"}`}
            handleChange={(e) => setColonia(e.target.value)}
          ></SelectsSel>
        )}
        <p>
          <code>
            {estado} - {municipio} - {colonia}
          </code>
        </p>
      </div>
    </div>
  );
};

export default SelectsAn;

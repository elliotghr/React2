import CrudTableRowEjercicio from "../componentsEjercicios/CrudTableRowEjercicio";

import React from "react";

const CrudTableEjercicios = ({ data, deleteData, setDataToEdit }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((el) => (
              <CrudTableRowEjercicio
                key={el.id}
                el={el}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              ></CrudTableRowEjercicio>
            ))
          ) : (
            <tr>
              <td>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTableEjercicios;

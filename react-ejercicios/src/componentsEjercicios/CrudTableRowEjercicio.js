import React from "react";

const CrudTableRowEjercicios = ({ el, deleteData, setDataToEdit }) => {
  let { name, age, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(el)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRowEjercicios;

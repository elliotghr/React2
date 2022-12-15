import React from "react";
import ExTableRow from "./ExTableRow";
const ExTable = ({ data,setdataToEdit,deleteData }) => {
  console.log(data);
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
            data.map((el) => <ExTableRow key={el.id} data={el} setdataToEdit={setdataToEdit} deleteData={deleteData}></ExTableRow>)
          ) : (
            <tr>
              <td> Sin registros</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExTable;

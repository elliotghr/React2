import React, { useState } from "react";
import CrudFrom from "./CrudFrom";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Nano",
    age: 10,
  },
  {
    id: 2,
    name: "Mosho",
    age: 8,
  },
  {
    id: 3,
    name: "Cricri",
    age: 5,
  },
  {
    id: 4,
    name: "Pelu",
    age: 1,
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  // Variable de estado que permite saber si es una operacion de inserción o creación, null es una creacion, true es actualización
  const [dataToEdit, setDataToEdit] = useState(null);
  // Creamos funciones para crear, actualizar y eliminar en este componente que se ejecutarán en los componentes hijos
  const createData = (data) => {
    console.log(data);
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (data) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${data}'?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id != data);
      setDb(newData);
    } else {
      return;
    }
  };
  return (
    <div>
      <h2>Crud APP</h2>
      {/* El formulario va a recibir 4 props, 1 valor y 3 funciones para desencadenar
      las funcionalidades del crud */}
      <article className="grid-1-2">
        <CrudFrom
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        ></CrudFrom>
        <CrudTable
          data={db}
          deleteData={deleteData}
          setDataToEdit={setDataToEdit}
        ></CrudTable>
      </article>
    </div>
  );
};

export default CrudApp;

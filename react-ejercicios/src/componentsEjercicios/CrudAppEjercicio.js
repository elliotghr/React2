import CrudFromEjercicios from "../componentsEjercicios/CrudFromEjercicios";
import CrudTableEjercicios from "../componentsEjercicios/CrudTableEjercicios";
import React, { useState } from "react";

let initialData = [
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
    age: 2,
  },
];

const CrudAppEjercicio = () => {
  const [db, setDb] = useState(initialData);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let updateElement = db.map((el) => (el.id === data.id ? data : el));
    setDb(updateElement);
  };
  const deleteData = (data) => {
    let { name, id } = data;
    let confirm = window.confirm(
      `Estás seguro de eliminar el elemento '${name}'`
    );
    if (confirm) {
      let deleteElement = db.filter((el) => el.id !== id);
      setDb(deleteElement);
    } else {
      return;
    }
  };
  return (
    <div>
      <h3>Crud Ejercicio</h3>
      <CrudFromEjercicios
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      ></CrudFromEjercicios>
      <CrudTableEjercicios
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
      ></CrudTableEjercicios>
    </div>
  );
};

export default CrudAppEjercicio;

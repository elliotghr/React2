import React, { useState, useEffect } from "react";
import CrudFrom from "../components/CrudFrom";
import CrudTable from "../components/CrudTable";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { helpHttp } from "../helpers/helpHttp";

const CrudApp = () => {
  const [db, setDb] = useState([]);
  // Variable de estado que permite saber si es una operacion de inserción o creación, null es una creacion, true es actualización
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/perros";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      //   console.log(res);
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setError(res);
        setDb(null);
      }
      setLoading(false);
    });
  }, [url]);
  // Creamos funciones para crear, actualizar y eliminar en este componente que se ejecutarán en los componentes hijos
  const createData = (data) => {
    console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    // Usamos el helper con su metodo post, pasamos el cuerpo y agregamos} el content-type (x json server)
    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        data.id = Date.now();
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let options = {
        body: data,
        headers: { "content-type": "application/json" },
      },
      endpoint = `http://localhost:5000/perros/${data.id}`;
    api.put(endpoint, options).then((res) => {
      //   console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        setError(null);
      } else {
        setError(res);
        setDb(null);
      }
      setLoading(false);
    });
  };
  const deleteData = (data) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${data}'?`
    );
    if (isDelete) {
      let endpoint = `${url}/${data}`,
        options = {
          headers: { "content-type": "application/json" },
        };
      api.del(endpoint, options).then((res) => {
        console.log(res);

        if (!res.err) {
          let newData = db.filter((el) => el.id != data);
          setDb(newData);
        } else {
          setError(res);
        }
      });
    }
  };
  return (
    <div>
      <h2>Crud APP Ejercicios</h2>
      {/* El formulario va a recibir 4 props, 1 valor y 3 funciones para desencadenar
      las funcionalidades del crud */}
      <article className="grid-1-2">
        <CrudFrom
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        ></CrudFrom>
        {loading && <Loader></Loader>}
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          ></CrudTable>
        )}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="red"
          ></Message>
        )}
      </article>
    </div>
  );
};

export default CrudApp;

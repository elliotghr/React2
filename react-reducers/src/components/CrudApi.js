import React, { useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducers";
import CrudFrom from "./CrudFrom";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/perros";
  //
  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        // setDb(res);
        // Traemos toda la data y como payload pasamos el valor de la petición
        dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
        setError(null);
      } else {
        setError(res);
        dispatch({ type: TYPES.NO_DATA });
        // setDb(null);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {
      if (!res.err) {
        data.id = Date.now();
        // setDb([...db, res]);
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
    // setDb([...db, data]);
  };
  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: { "content-type": "application/json" },
      };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        // let newData = db.map((el) => (el.id === data.id ? data : el));
        // setDb(newData);
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
      } else {
        setError(res);
      }
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
        if (!res.err) {
          // setDb(newData);
          dispatch({ type: TYPES.DELETE_DATA, payload: data });
        } else {
          setError(res);
        }
      });
    }
  };
  return (
    <div>
      <h2>Crud API</h2>
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
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          ></Message>
        )}
        {db && (
          <CrudTable
            data={db}
            deleteData={deleteData}
            setDataToEdit={setDataToEdit}
          ></CrudTable>
        )}
      </article>
    </div>
  );
};

export default CrudApi;

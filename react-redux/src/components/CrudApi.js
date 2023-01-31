import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudFrom from "./CrudFrom";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import { useSelector, useDispatch } from "react-redux";
import {
  readAllData,
  createAction,
  noAction,
  updateAction,
  deleteAction,
} from "../actions/crudActions";

const CrudApi = () => {
  // const [db, setDb] = useState(null);
  // const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { db } = state.crud;

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = "http://localhost:5000/perros";
  //
  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          // setDb(res);
          // Traemos toda la data y como payload pasamos el valor de la petición
          dispatch(readAllData(res));
          setError(null);
        } else {
          setError(res);
          dispatch(noAction());
          // setDb(null);
        }
        setLoading(false);
      });
  }, [url, dispatch]);

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    helpHttp()
      .post(url, options)
      .then((res) => {
        if (!res.err) {
          data.id = Date.now();
          // setDb([...db, res]);
          dispatch(createAction(res));
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

    helpHttp()
      .put(endpoint, options)
      .then((res) => {
        if (!res.err) {
          // let newData = db.map((el) => (el.id === data.id ? data : el));
          // setDb(newData);
          dispatch(updateAction(res));
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
      helpHttp()
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            // setDb(newData);
            dispatch(deleteAction(res));
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

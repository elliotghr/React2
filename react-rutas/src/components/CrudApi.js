import React, { useEffect, useState } from "react";
import { HashRouter, NavLink, Switch, Route } from "react-router-dom";
import { helpHttp } from "../helpers/helpHttp";
import Error404 from "../pages/Error404";
import CrudFrom from "./CrudFrom";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  const [db, setDb] = useState(null);
  // Variable de estado que permite saber si es una operacion de inserción o creación, null es una creacion, true es actualización
  const [dataToEdit, setDataToEdit] = useState(null);
  //   Variables para el Loader y Message
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/perros";

  useEffect(() => {
    setLoading(true);
    // Invocamos el helper
    api.get(url).then((res) => {
      //   console.log(res);
      //   Validamos la respuesta
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
    let endpoint = `${url}/${data.id}`,
      options = {
        body: data,
        headers: { "content-type": "application/json" },
      };

    console.log(endpoint);
    console.log(data);
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
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
      {/* Añadimos rutas */}
      {/* basename ruta a compartir, en este ejemplo: domainName/#/santos/ */}
      <HashRouter basename="santos">
        <header>
          <h2>CRUD API con Rutas</h2>
          <NavLink to="/" activeClassName="active">
            Santos
          </NavLink>
          <NavLink to="/agregar" activeClassName="active">
            Agregar
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <h2>Home de santos</h2>
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
          </Route>
          <Route exact path="/agregar">
            <h2>Agregar santos</h2>
            <CrudFrom
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            ></CrudFrom>
          </Route>
          <Route exact path="/editar/:id">
            <h2>Editar santos</h2>
            <CrudFrom
              createData={createData}
              updateData={updateData}
              dataToEdit={dataToEdit}
              setDataToEdit={setDataToEdit}
            ></CrudFrom>
          </Route>
          <Route path="*" children={Error404}></Route>
        </Switch>
      </HashRouter>

      <article className="grid-1-2"></article>
    </div>
  );
};

export default CrudApi;

import ExCrudTable from "./EsxCrudTable";
import ExCrudForm from "./ExCrudForm";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "../components/Loader";
import Message from "../components/Message";

const ExCrud = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/perros";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
    });
    setLoading(false);
  }, [url]);
  const createData = (data) => {
    const options = {
        method: "POST",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
      url = "http://localhost:5000/perros";

    api.post(url, options).then((res) => {
      data.id = res.id;
      setDb([...db, data]);
    });
  };
  const updateData = (data) => {
    console.log(data);
    const options = {
        method: "PUT",
        body: data,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
      url = `http://localhost:5000/perros/${data.id}`;
    api.put(url, options).then((res) => {
      console.log(res);
      let newData = db.map((el) => (el.id === data.id ? data : el));
      setDb(newData);
    });
  };
  const deleteData = (data) => {
    let confirm = window.confirm("Deseas eliminar el registro?");
    if (confirm) {
      let url = `http://localhost:5000/perros/${data}`;
      api.del(url).then((res) => {
        let newData = db.filter((el) => el.id != data);
        setDb(newData);
      });
    }
  };

  return (
    <div>
      <h2>ExCrud</h2>
      <ExCrudForm
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      ></ExCrudForm>
      {db && (
        <ExCrudTable
          db={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        ></ExCrudTable>
      )}
      {loading && <Loader></Loader>}
      {error && (
        <Message
          msg={`Ocurrió un error ${error.status}: ${error.statusText}`}
          bgColor="red"
        ></Message>
      )}
    </div>
  );
};

export default ExCrud;

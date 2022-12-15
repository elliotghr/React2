import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ExForm from "./ExForm";
import ExTable from "./ExTable";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ExApp = () => {
  const [data, setData] = useState(null);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(),
    endpoint = "http://localhost:5000/perros/";

  useEffect(() => {
    setLoading(true);
    api
      .get(endpoint)
      .then((res) => {
        if (res.err) {
          setError(res);
        } else {
          setData(res);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setLoading(false));
  }, [endpoint]);

  const createData = (fetchData) => {
    let options = {
      body: fetchData,
      headers: { "content-type": "application/json" },
    };
    api.post(endpoint, options).then((res) => {
      if (!res.err) {
        fetchData.id = Date.now();
        setData([...data, res]);
      } else {
        setError(res);
      }
    });
  };
  const updateData = (fetchData) => {
    let options = {
      body: fetchData,
      headers: {
        "content-type": "application/json",
      },
    };
    api
      .put(endpoint + fetchData.id, options)
      .then((res) => {
        console.log(res);
        let update = data.map((el) =>
          el.id === fetchData.id ? fetchData : el
        );
        setData(update);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteData = (fetchData) => {
    console.log(fetchData);
    let confirm = window.confirm("Estás seguro de eliminar el registro?");
    if (confirm) {
      let options = {
        headers: {
          "content-type": "application/json",
        },
      };
      api
        .del(endpoint + fetchData, options)
        .then((res) => {
          console.log(res);
          let update = data.filter((el) => el.id != fetchData);
          setData(update);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div>
      <h2>ExApp</h2>
      <ExForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
      ></ExForm>
      {loading && <Loader></Loader>}
      {error && (
        <Message
          msg={`Ocurrió un error ${error.status}: ${error.statusText}`}
          bgColor="red"
        ></Message>
      )}
      {data && (
        <ExTable
          data={data}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        ></ExTable>
      )}
    </div>
  );
};

export default ExApp;

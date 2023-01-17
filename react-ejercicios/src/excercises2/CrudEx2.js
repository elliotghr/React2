import { useEffect } from "react";
import { useState } from "react";
import Loader from "../components/Loader";
import { helpHttp } from "../helpers/helpHttp";
import Ex2Form from "./Ex2Form";
import Ex2Table from "./Ex2Table";

const initialValue = {
  name: "",
  age: "",
  id: null,
};

const CrudEx2 = () => {
  const [db, setDb] = useState(initialValue);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/perros";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      api.get(url).then((res) => {
        if (!res.err) {
          setDb(res);
        } else {
        }
        setLoading(false);
      });
    };
    fetchData();
  }, [url]);

  const createData = function (data) {
    data.id = Date.now();
    let url = "http://localhost:5000/perros";
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      setDb([...db, res]);
    });
  };
  const updateData = function (data) {
    let url = `http://localhost:5000/perros/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(url, options).then((res) => {
      if (!res.err) {
        console.log(res);
        let newDb = db.map((el) => (el.id === res.id ? res : el));
        setDb(newDb);
      }
    });
  };
  const deleteData = function (id) {
    let isDelete = window.confirm(
      "Estás seguro de borrar el registro con id " + id
    );
    if (isDelete) {
      let url = `http://localhost:5000/perros/${id}`;
      api.del(url).then((res) => {
        console.log(res);
        let newDb = db.filter((el) => el.id !== id);
        setDb(newDb);
      });
    }
  };
  return (
    <div>
      <h3>CrudEx2</h3>
      <Ex2Form
        createData={createData}
        dataToEdit={dataToEdit}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
      ></Ex2Form>
      {loading && <Loader></Loader>}
      {db && (
        <Ex2Table
          db={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        ></Ex2Table>
      )}
    </div>
  );
};

export default CrudEx2;

import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudFrom from "./CrudFrom";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
  // El Proveider no puede ir en el archivo donde vayamos a usar el useConsumer
  const { db, loading, error } = useContext(CrudContext);
  return (
    <div>
      <h2>Crud API con ContextAPI</h2>
      <article className="grid-1-2">
        <CrudFrom></CrudFrom>
        {loading && <Loader></Loader>}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          ></Message>
        )}
        {db && <CrudTable></CrudTable>}
      </article>
    </div>
  );
};

export default CrudApi;

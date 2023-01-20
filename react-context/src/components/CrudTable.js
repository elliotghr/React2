import { useContext } from "react";
import CrudContext from "../context/CrudContext";
import CrudTableRow from "./CrudTableRow";

const CrudTable = () => {
  // generamos un alias
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3>Tabla de datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/* Cambiamos el triple igual */}
          {/* Valor truthly debe ser el primero en validar y el falso en segundo lugar */}
          {data.length > 0 ? (
            data.map((el) => <CrudTableRow key={el.id} el={el}></CrudTableRow>)
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;

import ExCrudTableRow from "./ExCrudTableRow";
const ExCrudTable = ({ db, deleteData, setDataToEdit }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length > 0 ? (
            db.map((el) => (
              <ExCrudTableRow
                key={el.id}
                el={el}
                deleteData={deleteData}
                setDataToEdit={setDataToEdit}
              ></ExCrudTableRow>
            ))
          ) : (
            <tr>
              <td>Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExCrudTable;

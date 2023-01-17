import Ex2TableRow from "./Ex2TablRow";

const Ex2Table = ({ db, setDataToEdit, deleteData }) => {
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
              <Ex2TableRow
                key={el.id}
                el={el}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              ></Ex2TableRow>
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

export default Ex2Table;

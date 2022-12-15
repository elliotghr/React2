const ExTableRow = ({ data, setdataToEdit, deleteData }) => {
  const { id, name, age } = data;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setdataToEdit(data)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default ExTableRow;

const Ex2TableRow = ({ el, setDataToEdit, deleteData }) => {
  const { name, age, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Ex2TableRow;

const ExCrudTable = ({ el, deleteData, setDataToEdit }) => {
  const { name, id, age } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Edit</button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ExCrudTable;

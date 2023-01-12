import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  console.log(el);
  let history = useHistory();

  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt=""></img>
      </td>
      <td>Nombre artista</td>
      <td>Nombre canción</td>
      <td>
        <button onClick={() => history.push(`/canciones/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;

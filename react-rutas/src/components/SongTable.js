import SongTableRow from "./SongTableRow";

const SongTable = ({ mySongs, handleDeleteSong }) => {
  console.log(mySongs);
  return (
    <div>
      <h3>Mis canciones fav</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artista</th>
            <th>Canción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            // El index será el recorrido del map
            // Enviamos el index como id para nuestra tabla
            mySongs.map((el, index) => (
              <SongTableRow
                key={index}
                el={el}
                id={index}
                handleDeleteSong={handleDeleteSong}
              ></SongTableRow>
            ))
          ) : (
            <tr>
              <td colSpan="4">Sin canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SongTable;
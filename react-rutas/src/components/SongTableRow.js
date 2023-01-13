import { useHistory } from "react-router-dom";

const SongTableRow = ({ el, id, handleDeleteSong }) => {
  console.log(el);
  let { search, biography } = el;
  let avatar = biography.artists[0].strArtistThumb;
  let avatarStyles = {
    width: "auto",
    height: "40px",
  };
  let history = useHistory();

  return (
    <tr>
      <td>
        <img src={avatar} alt={search.artist} style={avatarStyles}></img>
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Ver</button>
        <button onClick={() => handleDeleteSong(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;

import { useParams } from "react-router-dom";
import SongDetails from "../components/SongDetails";

const SongPage = ({ mySongs }) => {
  // Destructuramos el parametro id
  let { id } = useParams();
  console.log(id, mySongs, mySongs[id]);
  let currentSong = mySongs[id];

  let { search, lyric, biography } = currentSong;
  return (
    <SongDetails
      search={search}
      lyric={lyric}
      biography={biography}
    ></SongDetails>
  );
};

export default SongPage;

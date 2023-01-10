import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, biography }) => {
  if (!lyric || !biography) return null;

  return (
    <div>
      {/* Consideramos error de la API y el AbortController */}
      {lyric.err || lyric.error || lyric.name === "AbortError" ? (
        <Message
          // Usamos dangerouslySetInnerHTML
          msg={`Error: no existe la canción <em> ${search.song}</em>`}
          bgColor="red"
        ></Message>
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics}></SongLyric>
      )}
      {biography.artists ? (
        <SongArtist artist={biography.artists[0]}></SongArtist>
      ) : (
        <Message
          msg={`Error: no existe el artista ${search.artist}`}
          bgColor="red"
        ></Message>
      )}
    </div>
  );
};

export default SongDetails;

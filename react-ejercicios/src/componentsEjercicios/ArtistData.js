import Artist1 from "./Artist1";
import Artist2 from "./Artist2";

const ArtistData = ({ artist1, artist2 }) => {
  if (!artist1 || !artist2) return null;
  console.log(artist1.artists[0]);
  return (
    <div>
      <Artist1 artist1={artist1.artists[0]}></Artist1>
      <Artist2 artist2={artist2.artists[0]}></Artist2>
    </div>
  );
};

export default ArtistData;

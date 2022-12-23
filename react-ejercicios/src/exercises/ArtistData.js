import Artist1 from "./Artist1";
import Artist2 from "./Artist2";

const ArtistData = ({ artist1Data, artist2Data }) => {
  if (!artist1Data || !artist2Data) {
    return;
  }
  return (
    <section>
      <Artist1 data={artist1Data.artists[0]}></Artist1>
      <Artist2 data={artist2Data.artists[0]}></Artist2>
    </section>
  );
};

export default ArtistData;

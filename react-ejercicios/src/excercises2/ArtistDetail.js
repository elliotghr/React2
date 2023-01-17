import Artist1 from "./Artist1";
import Artist2 from "./Artist2";

const ArtistDetail = ({ artist1Data, artist2Data }) => {
  return (
    <div>
      <Artist1 artist1Data={artist1Data}></Artist1>
      <Artist2 artist2Data={artist2Data}></Artist2>
    </div>
  );
};

export default ArtistDetail;

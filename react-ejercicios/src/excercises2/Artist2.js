const Artist2 = ({ artist2Data }) => {
  if (!artist2Data) {
    return;
  }
  let artist = artist2Data.artists[0];
  return (
    <div>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistLogo} alt={artist.strArtist}></img>
      <p>{artist.strBiographyES}</p>
    </div>
  );
};

export default Artist2;

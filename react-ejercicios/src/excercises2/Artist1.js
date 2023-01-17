const Artist1 = ({ artist1Data }) => {
  if (!artist1Data) {
    return;
  }
  let artist = artist1Data.artists[0];
  console.log(artist);
  return (
    <div>
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistLogo} alt={artist.strArtist}></img>
      <p>{artist.strBiographyEN}</p>
    </div>
  );
};

export default Artist1;

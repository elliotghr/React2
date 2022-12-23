const Artist2 = ({ data }) => {
  return (
    <article>
      <h3>{data.strArtist}</h3>
      <img src={`${data.strArtistLogo}`} alt={`${data.strArtist}`}></img>
      <p>{data.strCountry}</p>
      <p>{data.strBiographyEN}</p>
    </article>
  );
};

export default Artist2;

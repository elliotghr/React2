const Artist1 = ({ data }) => {
  console.log(data);
  return (
    <article>
      <h3>{data.strArtist}</h3>
      <img src={`${data.strArtistLogo}`} alt={`${data.strArtist}`}></img>
      <p>{data.strCountry}</p>
      <p>{data.strBiographyES}</p>
    </article>
  );
};

export default Artist1;

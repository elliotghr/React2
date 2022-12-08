import ArtistForm from "./ArtistForm";
import ArtistData from "./ArtistData";
import Loader from "../components/Loader";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

const ArtistSearch = () => {
  const [search, setSearch] = useState(null);
  const [artist1, setArtist1] = useState(null);
  const [artist2, setArtist2] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artista1, artista2 } = search;
      let artist1Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista1}`,
        artist2Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artista2}`;

      setLoading(true);

      const [artist1Res, artist2Res] = await Promise.all([
        helpHttp().get(artist1Url),
        helpHttp().get(artist2Url),
      ]);

      console.log(artist1Res, artist2Res);

      setArtist1(artist1Res);
      setArtist2(artist2Res);

      setLoading(false);
    };
    fetchData();
  }, [search]);
  return (
    <div>
      <ArtistForm setSearch={setSearch}></ArtistForm>
      {loading && <Loader></Loader>}
      {search && !loading && (
        <ArtistData artist1={artist1} artist2={artist2}></ArtistData>
      )}
    </div>
  );
};

export default ArtistSearch;

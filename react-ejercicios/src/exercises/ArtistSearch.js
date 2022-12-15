import React, { useState, useEffect } from "react";
import ArtistData from "./ArtistData";
import ArtistForm from "./ArtistForm";
import { helpHttp } from "../helpers/helpHttp";

const ArtistSearch = () => {
  const [artist1, setArtist1] = useState(null);
  const [artist2, setArtist2] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const getData = async () => {
      console.log(search);
      // Evitamos renderizados inecesarios
      if (search === null) return;

      const { artist1, artist2 } = search;
      let artist1Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist1}`,
        artist2Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist2}`;

      const [resArtist1, resArtist2] = await Promise.all([
        helpHttp().get(artist1Url),
        helpHttp().get(artist2Url),
      ]);

      console.log(resArtist1, resArtist2);
      
      setArtist1(resArtist1);
      setArtist2(resArtist2);
    };
    getData();
  }, [search]);
  return (
    <div>
      <h2>Artist Search</h2>
      <ArtistForm setSearch={setSearch}></ArtistForm>
      <ArtistData artist1={artist1} artist2={artist2}></ArtistData>
    </div>
  );
};

export default ArtistSearch;

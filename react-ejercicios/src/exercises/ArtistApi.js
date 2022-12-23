import React, { useState, useEffect } from "react";
import ArtistForm from "./ArtistForm";
import ArtistData from "./ArtistData";
import { helpHttp } from "../helpers/helpHttp";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ArtistApi = () => {
  const [artist1Data, setArtist1Data] = useState(null);
  const [artist2Data, setArtist2Data] = useState(null);
  const [search, setSearch] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchData = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      setLoading(true);
      const { artist1, artist2 } = search;

      let api = helpHttp(),
        url1 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist1}`,
        url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist2}`,
        fetchArtist1 = api.get(url1),
        fetchArtist2 = api.get(url2);

      const [artist1Res, artist2Res] = await Promise.all([
        fetchArtist1,
        fetchArtist2,
      ]);
      setArtist1Data(artist1Res);
      setArtist2Data(artist2Res);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      <h2>Artist Api</h2>
      <ArtistForm searchData={searchData}></ArtistForm>
      {search && !loading && (
        <ArtistData
          artist1Data={artist1Data}
          artist2Data={artist2Data}
        ></ArtistData>
      )}
      {error && (
        <Message
          msg={`Ocurrió un error ${error.status}: ${error.statusText}`}
          bgColor="red"
        ></Message>
      )}
      {loading && <Loader></Loader>}
    </div>
  );
};

export default ArtistApi;

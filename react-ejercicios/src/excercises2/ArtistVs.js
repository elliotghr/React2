import { useEffect } from "react";
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import ArtistDetail from "./ArtistDetail";
import ArtistForm from "./ArtistForm";

const initialValue = {
  artist1: "",
  artist2: "",
};

const ArtistVs = () => {
  const [search, setSearch] = useState(null);
  const [artist1Data, setArtist1Data] = useState(null);
  const [artist2Data, setArtist2Data] = useState(null);

  useEffect(() => {
    if (!search) return;

    const fetchData = async () => {
      let api = helpHttp();
      const { artist1, artist2 } = search;

      console.log(search);

      let artist1Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist1}`,
        artist2Url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist2}`;

      const [artist1Res, artist2Res] = await Promise.all([
        api.get(artist1Url),
        api.get(artist2Url),
      ]);
      setArtist1Data(artist1Res);
      setArtist2Data(artist2Res);
    };
    fetchData();

  }, [search]);

  return (
    <div>
      <h2>ArtistVs</h2>
      <ArtistForm setSearch={setSearch}></ArtistForm>
      <ArtistDetail
        artist1Data={artist1Data}
        artist2Data={artist2Data}
      ></ArtistDetail>
    </div>
  );
};

export default ArtistVs;

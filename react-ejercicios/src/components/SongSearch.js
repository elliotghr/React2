import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Evitamos renderizados inecesarios
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      // Neceisto ambas respuestas, usaremos all para esperar ambas peticiones y traer sus datos
      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      //   console.log(artistRes, songRes);
      setBiography(artistRes);
      setLyric(songRes);

      setLoading(false);
    };
    fetchData();
  }, [search]);
  //   manejador de la busqueda
  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };
  return (
    <div>
      <h2>SongSearch</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch}></SongForm>
        {loading && <Loader></Loader>}
        {/* cuando search tenga datos y loading esté en falso... */}
        {search && !loading && (
          <SongDetails
            search={search}
            lyric={lyric}
            biography={biography}
          ></SongDetails>
        )}
      </article>
    </div>
  );
};

export default SongSearch;

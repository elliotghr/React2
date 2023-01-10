import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";

// Definicion del valor de la variable inicial del localstorage
let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);
  // localStorage
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      setBiography(artistRes);
      setLyric(songRes);

      setLoading(false);
    };
    fetchData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);
  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  // Dos funcionalidades nuevas
  const handleSaveSong = () => {
    alert("Guardando canción en favortios");
  };

  const handleDeleteSong = (id) => {};
  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>SongSearch</h2>
          <Link to="/">Home</Link>
        </header>
        {/* Loader entre ambos */}
        {loading && <Loader></Loader>}
        <article className="grid-1-3">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              ></SongForm>
              <h2>Tabla de canciones</h2>
              {search && !loading && (
                <SongDetails
                  search={search}
                  lyric={lyric}
                  biography={biography}
                ></SongDetails>
              )}
            </Route>
            <Route exact path="/canciones/:id">
              <h2>Página de canción</h2>
            </Route>
            <Route path="*" component={Error404}></Route>
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;

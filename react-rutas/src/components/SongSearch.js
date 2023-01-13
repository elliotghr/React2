import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Error404 from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "../pages/SongPage";

// Definicion del valor de la variable inicial del localstorage
// Recupera el valor del localStorage, si no existe mySongs creará un array vacío
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
        // songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        songUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
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
    // Cada vez que haya una busqueda asignará el valor
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);
  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  // Dos funcionalidades nuevas por el LocalStorage
  const handleSaveSong = () => {
    alert("Salvando canción en Favoritos");
    let currentSong = {
      search,
      lyric,
      biography,
    };

    let songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };

  const handleDeleteSong = (id) => {
    // alert(`Elminando cancion con el id: ${id}`);
    let isDelete = window.confirm(`Deseas eliminar el registro con id ${id}`);
    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="canciones">
        {/* Links de nav */}
        <header>
          <h2>SongSearch</h2>
          <Link to="/">Home</Link>
        </header>
        {/* Loader entre ambos */}
        {loading && <Loader></Loader>}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              ></SongForm>
              {/* <h2>Tabla de canciones</h2> */}
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              ></SongTable>
              {search && !loading && (
                <SongDetails
                  search={search}
                  lyric={lyric}
                  biography={biography}
                ></SongDetails>
              )}
            </Route>
            <Route exact path="/:id">
              <SongPage mySongs={mySongs}></SongPage>
            </Route>
            <Route path="*" component={Error404}></Route>
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;

import React, { useState, useEffect } from "react";

const SongForm = ({ handleSearch }) => {
  const initialForm = {
    artist: "",
    song: "",
  };
  // Formualrios controlados apartir de una variable de estado
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // valdiamos
    if (!form.artist || !form.song) {
      return alert("Datos incompletos");
    }
    // enviamos los datos a handleSearch
    handleSearch(form);
    setForm(initialForm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del intérprete"
          onChange={handleChange}
          value={form.artist}
        ></input>
        <input
          type="text"
          name="song"
          placeholder="Nombre de la canción"
          onChange={handleChange}
          value={form.song}
        ></input>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default SongForm;

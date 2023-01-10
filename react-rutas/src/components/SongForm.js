import React, { useState, useEffect } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch, handleSaveSong }) => {
  // Formualrios controlados apartir de una variable de estado
  const [form, setForm] = useState(initialForm);
  const [isDisabled, setIsDisabled] = useState(true);

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
      alert("Datos incompletos");
      setIsDisabled(true);
      return;
    }
    // enviamos los datos a handleSearch
    handleSearch(form);
    setForm(initialForm);
    // modificamos la variable
    setIsDisabled(false);
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
        <input
          type="button"
          onClick={handleSaveSong}
          value="Agregar canción"
          disabled={isDisabled && "disabled"}
        ></input>
      </form>
    </div>
  );
};

export default SongForm;

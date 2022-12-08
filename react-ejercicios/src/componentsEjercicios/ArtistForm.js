import React, { useState, useEffect } from "react";

const ArtistForm = ({ setSearch }) => {
  const initialForm = {
    artista1: "",
    artista2: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artista1 || !form.artista2) return alert("Datos incompletos");
    setSearch(form);
    setForm(initialForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artista1"
          placeholder="Nombre Artista 1"
          onChange={handleChange}
          value={form.artista1}
        ></input>
        <input
          type="text"
          name="artista2"
          placeholder="Nombre Artista 2"
          onChange={handleChange}
          value={form.artista2}
        ></input>
        <input type="submit" value="enviar"></input>
      </form>
    </div>
  );
};

export default ArtistForm;

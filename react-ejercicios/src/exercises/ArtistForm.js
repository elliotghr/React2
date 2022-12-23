import React, { useState } from "react";

const initialForm = {
  artist1: "",
  artist2: "",
};

const ArtistForm = ({ searchData }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist1 || !form.artist2) {
      return alert("Datos incompletos");
    }
    searchData(form);
  };
  const handleReset = (e) => {
    setForm(initialForm);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist1"
          placeholder="Artista 1"
          onChange={handleChange}
          value={form.artist1}
        ></input>
        <input
          type="text"
          name="artist2"
          placeholder="Artista 2"
          onChange={handleChange}
          value={form.artist2}
        ></input>
        <input type="submit" value="Enviar"></input>
      </form>
    </div>
  );
};

export default ArtistForm;

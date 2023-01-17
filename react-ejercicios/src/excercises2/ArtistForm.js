import { useState } from "react";

const initialValue = {
  artist1: "",
  artist2: "",
};

const ArtistForm = ({ setSearch }) => {
  const [form, setForm] = useState(initialValue);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (!form.artist1 || !form.artist2) return alert("Datos incompletos");
    setSearch(form);
  };
  const handleChange = function (e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Artista 1"
          name="artist1"
          onChange={handleChange}
          value={form.artist1}
        ></input>
        <input
          type="text"
          placeholder="Artista 2"
          name="artist2"
          onChange={handleChange}
          value={form.artist2}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default ArtistForm;

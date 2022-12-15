import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  name: "",
  age: "",
};

const ExForm = ({ createData, updateData, dataToEdit, setdataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.age || !form.name) return alert("Datos incompletos");

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleReset = () => {
    setForm(initialForm);
    setdataToEdit(null);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        ></input>
        <input
          type="text"
          name="age"
          placeholder="Edad"
          onChange={handleChange}
          value={form.age}
        ></input>
        <input type="submit" value="Enviar"></input>
        <input type="reset" value="Limpiar" onClick={handleReset}></input>
      </form>
    </div>
  );
};

export default ExForm;

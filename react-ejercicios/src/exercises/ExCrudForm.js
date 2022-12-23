import React, { useState, useEffect } from "react";

const ExCrudForm = ({ createData, updateData, setDataToEdit, dataToEdit }) => {
  const initialForm = {
    name: "",
    age: "",
    id: null,
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age) return alert("Datos incompletos");

    if (!form.id) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
  };
  return (
    <div>
      <h3>Form</h3>
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

export default ExCrudForm;

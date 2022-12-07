import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  age: "",
  id: null,
};

const CrudFromEjercicios = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
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
    if (!form.name || !form.age) {
      return alert("Datos Incompletos");
    }
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
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };
  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="age"
          placeholder="Edad"
          onChange={handleChange}
          value={form.age}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onChange={handleReset} />
      </form>
    </div>
  );
};

export default CrudFromEjercicios;

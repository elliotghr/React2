import { useEffect } from "react";
import { useState } from "react";

const initialValue = {
  name: "",
  age: "",
  id: null,
};

const Ex2Form = ({ createData, dataToEdit, updateData, setDataToEdit }) => {
  const [form, setForm] = useState(initialValue);

  useEffect(() => {
    if (!dataToEdit) return;

    setForm(dataToEdit);
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.age) {
      return alert("Datos incompletos");
    }
    if (!form.id) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialValue);
    setDataToEdit(null);
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

export default Ex2Form;

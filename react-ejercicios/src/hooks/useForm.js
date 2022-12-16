import { useState } from "react";
// validateForm función para nuestro blur
export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  // Cuando se pierda el foco de los inputs
  const handleBlur = (e) => {
    // Creamos una copia del formulario y lo actualizamos y mandamos mensaje de error
    handleChange(e);
    setErrors(validateForm(form));
  };
  const handleSubmit = (e) => {};
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

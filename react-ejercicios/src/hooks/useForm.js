import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Evaluamos que no existan errores
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      // alert("Enviando formulario");
      setLoading(true);
      helpHttp()
        .post("https://formsubmit.co/ajax/gunsnroses.2618@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    } else {
      return;
    }
  };
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

import { useForm } from "../hooks/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) errors.name = "El campo 'Nombre' es requerido";
  if (!form.email.trim()) errors.email = "El campo 'Email' es requerido";
  if (!form.subject.trim()) errors.subject = "El campo 'Asunto' es requerido";
  if (!form.comments.trim())
    errors.comments = "El campo 'Comentarios' es requerido";
  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "red",
};
const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>
      <h2>Fromulario de contacto</h2>
      <form onSubmit={handleSubmit}></form>
      <input
        type="text"
        name="name"
        placeholder="Escribe tu nombre"
        // Validación cuando se pierda el foco del input
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.name}
        required
      ></input>
      {errors.name && <p style={styles}>{errors.name}</p>}
      <input
        type="email"
        name="email"
        placeholder="Escribe tu email"
        // Validación cuando se pierda el foco del input
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.email}
        required
      ></input>
      {errors.email && <p style={styles}>{errors.email}</p>}
      <input
        type="text"
        name="subject"
        placeholder="Asunto a tratar"
        // Validación cuando se pierda el foco del input
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.subject}
        required
      ></input>
      {errors.subject && <p style={styles}>{errors.subject}</p>}
      <textarea
        name="comments"
        cols="50"
        rows="5"
        placeholder="Escribe tus comentarios"
        onBlur={handleBlur}
        onChange={handleChange}
        value={form.comments}
        required
      ></textarea>
      {errors.comments && <p style={styles}>{errors.comments}</p>}
      <input type="submit" value="Enviar"></input>
    </div>
  );
};

export default ContactForm;

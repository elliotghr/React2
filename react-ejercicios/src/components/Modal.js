import "./Modal.css";
// Todo componente puede tener la propiedad children
// La propiedad children hace referencia al contenido dentro del componente
// Se usa cuando un mismo componente tiene diferente contenido
const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;

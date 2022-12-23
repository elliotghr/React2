const ModalEx = ({ children, isOpen, closeModal }) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
  };
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handlePropagation}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default ModalEx;

import ModalEx from "./ModalEx";
import { useModal } from "../hooks/useModal";
const ModalsEx = () => {
  const [isOpen, openModal, closeModal] = useModal(false);
  return (
    <section>
      <h2>ModalsEx</h2>
      <button onClick={openModal}>Modal 1</button>
      <ModalEx isOpen={isOpen} closeModal={closeModal}>
        <h2>Modal 1</h2>
        <p>Contenido</p>
        <img src="https://placeimg.com/400/400/animals" alt="animals"></img>
      </ModalEx>
    </section>
  );
};

export default ModalsEx;

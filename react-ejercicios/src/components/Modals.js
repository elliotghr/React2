// Contenedor
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import SongSearch from "./SongSearch";
const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModalSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals"></img>
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Este es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/nature" alt="nature"></img>
      </Modal>
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm></ContactForm>
      </Modal>
      <button onClick={openModalSong}>Modal Contacto</button>
      <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
        <SongSearch></SongSearch>
      </Modal>
    </div>
  );
};

export default Modals;

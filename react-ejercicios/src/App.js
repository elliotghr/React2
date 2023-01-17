import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";
import Ex2Container from "./excercises2/Ex2Container";

function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <Modals></Modals>
      <hr></hr>
      <ContactForm></ContactForm>
      <hr></hr>
      <SelectsAnidados></SelectsAnidados>
      <hr></hr>
      <SongSearch></SongSearch>
      <hr></hr>
      <CrudApi></CrudApi>
      <hr></hr>
      <CrudApp> </CrudApp>
      <hr></hr>
      <Ex2Container></Ex2Container>
    </>
  );
}

export default App;

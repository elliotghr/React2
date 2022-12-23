import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";
// Ex
import ExCrud from "./exercises/ExCrud";
import ArtistApi from "./exercises/ArtistApi";
import SelectsAn from "./exercises/SelectsAn";
import ModalsEx from "./exercises/ModalsEx";
function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <Modals></Modals>
      <hr></hr>
      <ModalsEx></ModalsEx>
      <hr></hr>
      <SelectsAn></SelectsAn>
      <hr></hr>
      <ArtistApi></ArtistApi>
      <hr></hr>
      <ExCrud></ExCrud>
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
    </>
  );
}

export default App;

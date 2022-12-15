import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
import ExApp from "./exercises/ExApp";
import ArtistSearch from "./exercises/ArtistSearch";
import ContactForm from "./components/ContactForm";
function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <ContactForm></ContactForm>
      <hr></hr>
      <ArtistSearch></ArtistSearch>
      {/* <ExApp></ExApp> */}
      <hr></hr>
      <SelectsAnidados></SelectsAnidados>
      <hr></hr>
      <SongSearch></SongSearch>
      <hr></hr>
      <hr></hr>
      <CrudApi></CrudApi>
      <hr></hr>
      <CrudApp> </CrudApp>
      <hr></hr>
    </>
  );
}

export default App;

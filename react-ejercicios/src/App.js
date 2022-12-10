import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados";
function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
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

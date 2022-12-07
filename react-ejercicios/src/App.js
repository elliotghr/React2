import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";
import SongSearch from "./components/SongSearch";
import CrudApiEjercicios from "./componentsEjercicios/CrudApiEjercicios";

function App() {
  return (
    <>
      <h1>Ejercicios con react</h1>
      <SongSearch></SongSearch>
      <hr></hr>
      <CrudApiEjercicios></CrudApiEjercicios>
      <hr></hr>
      <CrudApi></CrudApi>
      {/* <CrudAppEjercicio></CrudAppEjercicio> */}
      <hr></hr>
      <CrudApp> </CrudApp>
      <hr></hr>
    </>
  );
}

export default App;

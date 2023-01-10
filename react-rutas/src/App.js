import ConceptosBasicos from "./components/ConceptosBasicos";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <h2>Ejercios rutas</h2>
      <CrudApi></CrudApi>
      <hr></hr>
      {/* <SongSearch></SongSearch> */}
      <hr></hr>
      <h2>Conceptos Rutas</h2>
      <h3>Documentación</h3>
      <a
        href="https://reactrouter.com/en/main"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr></hr>
      {/* <ConceptosBasicos></ConceptosBasicos> */}
    </div>
  );
}

export default App;

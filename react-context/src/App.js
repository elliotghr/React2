import CrudApi from "./components/CrudApi";
import MyPage from "./components/MyPage";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      {/* Hacemos uso del theme provider aqui */}
      <CrudProvider>
        <CrudApi></CrudApi>
      </CrudProvider>
      <hr />
      <MyPage></MyPage>
    </div>
  );
}

export default App;

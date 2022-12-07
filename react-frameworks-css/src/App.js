import logo from "./logo.svg";
import "./App.css";
import Boostrap from "./componentes/Boostrap";
import Bulma from "./componentes/Bulma";
import ReactBoostrap from "./componentes/ReactBoostrap";
import MaterialUi from "./componentes/MaterialUi";
import TemporaryDrawer from "./componentes/MaterialDrawer";

function App() {
  return (
    <div>
      <h1>Frameworks CSS con React</h1>
      {/* <Boostrap></Boostrap> */}
      {/* <Bulma></Bulma> */}
      <ReactBoostrap></ReactBoostrap>
      <MaterialUi></MaterialUi>
      <TemporaryDrawer></TemporaryDrawer>
    </div>
  );
}

export default App;

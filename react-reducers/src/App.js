import Contador from "./components/Contador";
import Contador2 from "./components/Contador2";
import Contador2Mejorado from "./components/Contador2Mejorado";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr></hr>
      <Contador2Mejorado></Contador2Mejorado>
      <Contador></Contador>
      <Contador2></Contador2>
    </div>
  );
}

export default App;

import Contador from "./components/Contador";
import Contador2 from "./components/Contador2";
import Contador2Mejorado from "./components/Contador2Mejorado";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <ShoppingCart></ShoppingCart>
      <hr></hr>
      <Contador2Mejorado></Contador2Mejorado>
      <hr></hr>
      <Contador></Contador>
      <hr></hr>
      <Contador2></Contador2>
    </div>
  );
}

export default App;

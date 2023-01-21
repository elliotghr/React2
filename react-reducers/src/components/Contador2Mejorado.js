import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions.";
import {
  contadorinit,
  contadorInitialState,
  contadorReducer,
} from "../reducers/contadorReducer";

const Contador2Mejorado = () => {
  const [state, dispatch] = useReducer(
    contadorReducer,
    contadorInitialState,
    contadorinit
  );
  const sumar = (e) => dispatch({ type: TYPES.INCREMENT });
  // pasamos el payload, que es el valor que modificará el estado
  const sumar5 = (e) => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = (e) => dispatch({ type: TYPES.DECREMENT });
  const restar_5 = (e) => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = (e) => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Mejorado Reducer</h2>
      <nav>
        <button onClick={sumar5}>+5</button>
        <button onClick={sumar}>+</button>
        <button onClick={reset}>0</button>
        <button onClick={restar}>-</button>
        <button onClick={restar_5}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador2Mejorado;

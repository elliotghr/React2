import { useReducer } from "react";

// Se declara el objeto que tendrá los valores a realizar nuestra app
const TYPES = {
  INCREMENT: "INCREMENT",
  INCREMENT_5: "INCREMENT_5",
  DECREMENT: "DECREMENT",
  DECREMENT_5: "DECREMENT_5",
  RESET: 0,
};

const init = (initialState) => {
  return {
    contador: initialState.contador + 100,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    // Y aqui tomamos ese valor que actualizará nuestro estado
    case TYPES.INCREMENT_5:
      return { contador: state.contador + action.payload };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    case TYPES.DECREMENT_5:
      return { contador: state.contador - action.payload };
    case TYPES.RESET:
      return initialState;
    default:
      return state;
  }
}

const initialState = { contador: 0 };

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const sumar = (e) => dispatch({ type: TYPES.INCREMENT });
  // pasamos el payload, que es el valor que modificará el estado
  const sumar5 = (e) => dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
  const restar = (e) => dispatch({ type: TYPES.DECREMENT });
  const restar_5 = (e) => dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
  const reset = (e) => dispatch({ type: TYPES.RESET });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
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

export default Contador;

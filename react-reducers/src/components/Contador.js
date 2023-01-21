import { useReducer } from "react";

// 3.- Función reducer, recibe dos parametros, el state y action
// action es un objeto que tiene un tipo de acción (action.type) a ejecutar y el payload (que puede exitir o no)
function reducer(state, action) {
  // Aqui se acostumbra a usar la estructura switch case y se evalúa el tipo de acción (action.type)
  switch (action.type) {
    case "INCREMENT":
      return { contador: state.contador + 1 };
    case "DECREMENT":
      return { contador: state.contador - 1 };
    //   En caso de que se mande una acción que no existe
    default:
      return state;
  }
}

const initialState = { contador: 0 };

const Contador = () => {
  //   Variable remplazada por una de tipo useReducer
  //   const [count, setCount] = useState(0);

  //   1.- Acá también se declara la variable de estado (state) y aparte la función que va a despachar (dispatch, equivalente a la función set)
  //   2.- El hook useReducer recibe tres paramteros, la función reductora (que debe estar definida fuera del componente ), un initialState, que es el valor inicial de nuestro estado y por el cual podremos acceder a el y como tercer parametro opcional tenemos init que nos permite hacer una transformación al estado inicial por medio de una función
  const [state, dispatch] = useReducer(reducer, initialState);
  //   4.- El disaptch recibe el objeto de la acción que se va a lanzar
  const sumar = (e) => dispatch({ type: "INCREMENT" });
  const restar = (e) => dispatch({ type: "DECREMENT" });
  
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;

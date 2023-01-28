import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  restar,
  restar5,
  sumar,
  sumar5,
} from "../actions/contadorActions";

const Contador = () => {
  // Se le pasa el state
  const state = useSelector((state) => state);
  // Trae todos los reducers que están en nuestro state único, aquí se puede ver el contador
  //   console.log(state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Contador Hook</h2>
      <nav>
        <button onClick={() => dispatch(sumar())}>+5</button>
        <button onClick={() => dispatch(sumar5())}>+</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(restar())}>-</button>
        <button onClick={() => dispatch(restar5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;

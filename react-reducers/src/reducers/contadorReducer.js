import { TYPES } from "../actions/contadorActions.";

export const contadorInitialState = { contador: 0 };

export const contadorinit = (contadorInitialState) => {
  return {
    contador: contadorInitialState.contador + 100,
  };
};
export function contadorReducer(state, action) {
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
      return contadorInitialState;
    default:
      return state;
  }
}

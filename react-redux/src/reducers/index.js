import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";

// En cada prop recibe cada uno de los reducers
// Combinamos el reducer que creamos en el index de nuestro reducer
const reducer = combineReducers({
  contador: contadorReducer,
});

export default reducer;

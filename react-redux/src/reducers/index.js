import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { crudReducer } from "./crudReducers";
import { shoppingReducer } from "./shoppingReducersMiRespuesta";

// En cada prop recibe cada uno de los reducers
// Combinamos el reducer que creamos en el index de nuestro reducer
const reducer = combineReducers({
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
});

export default reducer;

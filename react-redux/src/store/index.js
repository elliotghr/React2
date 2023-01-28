import { createStore } from "redux";
import reducer from "../reducers";

// Le pasamos la función que combina todos nuestros reducers
const store = createStore(reducer);

// Para que detecte cualquier cambio en el estado entonces hay que suscribirse
// Este recibe una función
store.subscribe(() => console.log(store));

// Finalmente exportamos por defecto el store
export default store;

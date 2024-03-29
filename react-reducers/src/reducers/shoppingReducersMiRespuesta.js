/* eslint-disable no-fallthrough */
import { TYPES } from "../actions/contadorActions.";

export const shoppingInitialState = {
  // Simulamos el objeto como si viniera de una API
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      // Buscamos el id en la lista de productos
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      //   console.log(newItem);

      let test = state.cart.find((el) => el.id === action.payload);
      if (!test) {
        newItem.quantity = 1;
        return {
          ...state,
          cart: [...state.cart, newItem],
        };
      } else {
        test.quantity = test.quantity + 0.5;
        let stateCart = state.cart.map((el) => (el.id === test.id ? test : el));
        return {
          ...state,
          cart: [...stateCart],
        };
      }
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
    }
    case TYPES.CLEAR_CART: {
    }
    default:
      return state;
  }
}

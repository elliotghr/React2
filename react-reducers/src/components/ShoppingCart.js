import { useReducer } from "react";
import { TYPES } from "../actions/shoppingActions";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducers";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  // Declaramos el hook useReducer y asignamos la función reductora y el valor inicial

  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  // Destructuamos los productos y el cart

  const { products, cart } = state;

  const addToCart = (id) => {
    // Desencadenamos la funcionalidad del reducer con dispatch y le pasamos el id del prod
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };

  // pasamos el id y una variable para saber si se eliminan todos o solo uno
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    if (all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      {/* Renderizado de los productos */}
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} addToCart={addToCart} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;

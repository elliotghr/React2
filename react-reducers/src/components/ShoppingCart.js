import { useReducer } from "react";
import { TYPES } from "../actions/contadorActions.";
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
  const delFromCart = () => {};
  const clearCart = () => {};

  return (
    <div>
      <h2>Carrito de compras</h2>
      <h3>Productos</h3>
      {/* Renderizado de los productos */}
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            data={product}
            addToCart={addToCart}
          ></ProductItem>
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {/* Ocupamos el index para no reptir Key values */}
        {cart.map((item, index) => (
          <CartItem
            key={index}
            data={item}
            delFromCart={delFromCart}
          ></CartItem>
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;

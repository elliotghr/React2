import React from "react";

const CartItem = ({ data, delFromCart }) => {
  const { id, name, price } = data;
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button onClick={delFromCart}>Eliminar Uno</button>
      <button onClick={delFromCart}>Eliminar Todos</button>
    </div>
  );
};

export default CartItem;

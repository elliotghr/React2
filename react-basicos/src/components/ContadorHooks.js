import React, { useState } from "react";

export default function ContadorHooks(props) {
  // console.log(useState());
  // Variable, función que actualiza la variable y valor inicial
  // El valor inicial puede estar en una variable independiente o recibir el valor directamente
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return (
    <>
      <h2>Hooks - useState</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h4>{props.titulo}</h4>
    </>
  );
}

// Props por defecto

ContadorHooks.defaultProps = {
  titulo: "Soy una prop por defecto!",
};

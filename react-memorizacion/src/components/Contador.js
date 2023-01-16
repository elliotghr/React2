import { useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = (e) => {
    setContador(contador + 1);
  };
  const restar = (e) => {
    setContador(contador - 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      {/* El componente hijo siempre se renderiza cuando el componente padre (Contador) actualiza su estado */}
      <ContadorHijo></ContadorHijo>
    </div>
  );
};

export default Contador;

import { useCallback, useState } from "react";
import ContadorHijo from "./ContadorHijo";

const Contador = () => {
  const [contador, setContador] = useState(0);
  const [input, setInput] = useState("");

  // const sumar = (e) => {
  //   setContador(contador + 1);
  // };
  // Función sumar memorizada, para evitar el re renderizado del elemento hijo
  // Es similar al useState
  const sumar = useCallback(() => {
    // Función a memorizar
    setContador(contador + 1);
    // Variable con la que se debe memorizar
  }, [contador]);
  // const restar = (e) => {
  //   setContador(contador - 1);
  // };
  const restar = useCallback(() => {
    // Función a memorizar
    setContador(contador - 1);
    // Variable con la que se debe memorizar
  }, [contador]);
  
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Contador</h2>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{contador}</h3>
      <input type="text" onChange={handleInput} value={input}></input>
      {/* El componente hijo siempre se renderiza cuando el componente padre (Contador) actualiza su estado */}
      <ContadorHijo
        contador={contador}
        sumar={sumar}
        restar={restar}
      ></ContadorHijo>
    </div>
  );
};

export default Contador;

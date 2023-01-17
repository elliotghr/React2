import { memo, useMemo } from "react";
// Importamos memo

const ContadorHijo = ({ contador, sumar, restar }) => {
  // Valor calculado
  // Vamos a memorizarlo
  // let superNumero = 0;

  // for (let i = 0; i < 1000000000; i++) {
  //   superNumero++;
  // }
  // Use memo va a memorizar el resultado de una función, es decir, un valor calculado
  // Use memo puede mandar un error si no devolvemos el valor que pretendemos memorizar
  const superNumero = useMemo(() => {
    let numero = 0;

    for (let i = 0; i < 1000000000; i++) {
      numero++;
    }
    // Retornamos el valor a memorizar
    return numero;
  }, []);

  console.log("Hijo contador se renderiza");
  return (
    <div
      style={{ border: "thin solid black", margin: "1rem", padding: "1rem" }}
    >
      <h2>Hijo del contador</h2>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
      <h3>{superNumero}</h3>
    </div>
  );
};
// Envolvemos el componente a memorizar con memo
export default memo(ContadorHijo);
// Haciendo todo esto evitamos el renderizado del componente hijo
// Solo va a cambiar por el paso de propiedades o por el cambio interno del estado

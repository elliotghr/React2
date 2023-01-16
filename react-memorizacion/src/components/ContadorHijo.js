import { memo } from "react";
// Importamos memo

const ContadorHijo = () => {
  console.log("Hijo contador se renderiza");
  return (
    <div
      style={{ border: "thin solid black", margin: "1rem", padding: "1rem" }}
    >
      <h2>Hijo del contador</h2>
    </div>
  );
};
// Envolvemos el componente a memorizar con memo
export default memo(ContadorHijo);
// Haciendo todo esto evitamos el renderizado del componente hijo
// Solo va a cambiar por el paso de propiedades o por el cambio interno del estado

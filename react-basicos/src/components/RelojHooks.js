import React, { useEffect, useState } from "react";

// Destructuramos hora
function Reloj({ hora }) {
  return <h3>{hora}</h3>;
}

export default function RelojHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(temporizador);
    }
    return () => {
      // Se trae la fase de desmontaje y se limpia (otra vez y por cualquier cosa) el intervalo de tiempo
    //   console.log("Fase de desmontaje");
      clearInterval(temporizador);
    };
    // Cuando cambie el valor de la variable visible...
  }, [visible]);

  return (
    <>
      <h2>Reloj con hooks</h2>
      {visible && <Reloj hora={hour} />}
      <button onClick={() => setVisible(true)}>iniciar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  );
}

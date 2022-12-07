import React, { useEffect, useState } from "react";

export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);
  const [name, setName] = useState("Jon");

  useEffect(() => {
    // console.log("Fase de Actualización", "Y moviendo el scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);
    // detectarScroll();
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    };
  }, []);
  return (
    <>
      <h2>Hooks-useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}

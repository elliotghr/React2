import React, { useEffect, useState } from "react";

export default function ScrollHooks2() {
  const [scrollY, setScrollY] = useState(0);
  // const [name, setName] = useState("Jon");

  //   Podemos tener tantos useEffect como necesitemos
  //   Un useEffect que no tenga definido el segundo parametro que es la Lista de Dependencias
  //   Es como un componentDidUpdate, si deseas que se muestre una vez (fase de monatje)
  //   se debe dejar vacío, pero no se debe no poner la Lista de Dependencias

  useEffect(() => {
    console.log("Moviendo el Scroll");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.addEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  // El segundo parametro ( [] ) representa las dependencias que se van a estar comprobando
  // Cuando se le pasa alguna vasriable de estado que quieras estra controlando eso significa
  // Que ese useEffect solamente se va a ejecutar cuando esta variable cambie

  //   Si solo deseas que se ejecute una vez se recomienda dejarla vacía
  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  //   Nunca se debe olvidar escribir la Lista de dependencias
  useEffect(() => {
    console.log("Fase de Actulizacón");
  });

  //   Fase de desmontaje
  //   Con ese return React reconoce que quieres una fase de desmontaje
  useEffect(() => {
    return () => {
      console.log("Fase de Desmontaje");
    };
  });
  return (
    <>
      <h2>Hooks-useEffect y el ciclo de vida</h2>
      <p>Scroll Y del navegador {scrollY}px</p>
    </>
  );
}

import React from "react";
// función css para poder usar css dentro del component styled
// funcion keyframes para hacer uso de animaciones
// ThemeProvider para manejar diferentes temas (como dark o light, o diferentes colores en la aplicación)
// createGlobalStyle permite crear estilos globales para toda la aplicación
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from "styled-components";

export default function ComponentesEstilizados() {
  let mainColor = "#db7093",
    mainAlphaColor80 = "#db709380";
  // Podemos crear una función para reutilziar el codigo, en este caso, el valor de las trancisiones variando el tiempo
  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
  `;

  // Utilizamos styled y agregamos una etiqueta h3
  // Esto es CSS inyectado en las template string
  // y al estar entre template strings podemos interpolar valores
  // Además, podemos hacer el nesting de SASS
  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color};
    /* color: ${(color) => color}; */
    color: ${(props) => props.color || "#000"};
    background-color: ${mainColor};
    transition: ${setTransitionTime(".5s")};
    animation: ${fadeIn} 2s ease-in-out;

    ${({ isButton }) =>
      isButton &&
      css`
        margin: auto;
        max-width: 50%;
        border-radius: 0.25rem;
        cursor: pointer;
      `}

    &:hover {
      background-color: ${mainAlphaColor80};
    }
  `;

  const light = {
    color: "#222",
    bgColor: "#DDD",
  };
  const dark = {
    color: "#DDD",
    bgColor: "#222",
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.bgColor};
  `;

  // Herencia de box
  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GloablStyle = createGlobalStyle`
  h2{
    padding: 2rem;
    background-color: white;
    color: #61dafb;
    text-transform: uppercase;
  }
  `;
  return (
    <>
      <GloablStyle></GloablStyle>
      <h2>Styled-Components</h2>
      <MyH3>Hola, soy un h3 estilizado con styled-components</MyH3>
      {/* Paso de propiedad */}
      <MyH3 color="#61dafb">
        Hola, soy un h3 estilizado con styled-components
      </MyH3>
      {/* Propiedad boolean */}
      <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
      {/* Theme Provider es un container de variables que tiene una propiedad que recibe un objeto de css */}
      <ThemeProvider theme={light}>
        <Box>Soy una caja light</Box>
        <BoxRounded>Soy una caja redondeada light</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja dark</Box>
        <BoxRounded>Soy una caja redondeada dark</BoxRounded>
      </ThemeProvider>
    </>
  );
}

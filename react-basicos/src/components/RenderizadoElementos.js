import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank">
        {props.el.name}
      </a>
    </li>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    // Definimos el estado
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno"],
    };
  }

  render() {
    // console.log(data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {/* Ciclo for con .map(), es necesario pasar la key. Index no es la mejor forma de pasar la key */}
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Frameworks Frontend Javascript</h3>
        <ul>
          {/* De data.frameworks realizamos un for y traemos ElementoLista pasando como props la key y el elemento */}
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}

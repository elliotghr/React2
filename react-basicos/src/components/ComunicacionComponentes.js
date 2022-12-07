import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };
  //   Metodo dentro de la estructura padre que ejecutará el Componente Hijo
  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        {/* De componente padre a componente hijo */}
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 1"
        />
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      {/* Accion del componente hijo que afecta al estado del COmponente padre */}
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}

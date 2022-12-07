import React, { Component } from "react";

function Comprop(props) {
  return <p>Soy un componente pasado como props</p>;
}

function Sesion(props) {
  return <p>Soy un componente condicional</p>;
}

export default class Prueba extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      session: true,
    };
  }

  sumar = () => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>PRUEBAS</h2>
        <h2>Las Props</h2>
        <h3>{this.props.descripcion}</h3>
        <h4>{this.props.nombre}</h4>
        <Comprop />
        <p>{this.state.contador}</p>
        {this.state.session ? <Sesion /> : null}
        <button onClick={this.sumar}>+</button>
      </>
    );
  }
}

Prueba.defaultProps = {
  nombre: "Nano",
};

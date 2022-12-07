import React, { Component } from "react";

function EstadoAHijo(props) {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

export default class Estado extends Component {
  // El State lo podemos definir en el constructor
  constructor(props) {
    super(props);
    // Aqui creamos el objeto del estado
    this.state = {
      contador: 0,
    };

    // setInterval(() => {
    //   this.setState({
    //     contador: this.state.contador + 1,
    //   });
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h2>El State</h2>
        <p> {this.state.contador} </p>
        <EstadoAHijo contadorHijo={this.state.contador}/>
      </div>
    );
  }
}

import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
      title: "hola mundo",
    };
    // Binding
    // Cada vez que definamos un evento en un componente basado en clases tendremos que hacer el Binding
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    this.cambioTexto = this.cambioTexto.bind(this);
  }
  // Evento
  //   Generaremos un metodo dentro de una clase que nos permite sumar y restar el contador
  sumar(e) {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  // Evento
  restar(e) {
    console.log("restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  cambioTexto() {
    this.setState({
      title: "Hello World",
    });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
        <button onClick={this.cambioTexto}>{this.state.title}</button>
      </div>
    );
  }
}

// Idealmente debe ir en otr archivo
// Property Initializers
export class EventosES7 extends Component {
  // Se define el state sin constructor
  state = {
    contador: 0,
    title: "hola mundo",
  };
  // Evento
  // El Binding no es necesario ya que la Arrow Function nos permite heredar el contexto de la clase a la que pertenece
  //   Arrow Function
  sumar = (e) => {
    console.log("sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log("restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  cambioTexto = (e) => {
    this.setState({
      title: "Hello World",
    });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
        <button onClick={this.cambioTexto}>{this.state.title}</button>
      </div>
    );
  }
}

// function Boton(props) {
//   return (
//     <button onClick={props.myOnClickPersonalizado}>
//       Boton hecho componente
//     </button>
//   );
// }

// Mejorando la sintaxis de la función Boton con Arrow Functions

// const Boton = (props) => (
//   <button onClick={props.myOnClickPersonalizado}>Boton hecho componente</button>
// );

// Destructurando props

const Boton = ({ myOnClickPersonalizado }) => (
  <button onClick={myOnClickPersonalizado}>Boton hecho componente</button>
);

export class MasSobreEventos extends Component {
  // Evento
  handleClick = (e, mensaje) => {
    // SyntheticBaseEvent
    console.log(e);
    console.log(e.target);
    // Evento nativo
    console.log(e.nativeEvent);
    console.log(e.nativeEvent.target);
    // Parametros
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button onClick={this.handleClick}>Saludar</button>
        {/* Pasando parametros desde el manejador de eventos */}
        {/* Se crea una Arrow Function */}
        <button
          onClick={(e) =>
            this.handleClick(e, "Pasando parametro desde un evento")
          }
        >
          Saludar pasando Parametros
        </button>
        {/* Evento personalizado */}
        {/* <Boton onClick={(e) =>
            this.handleClick(e, "Pasando parametro desde un evento")}/> */}
        {/* Debo crear una prop y pasarla al Componente  */}
        <Boton
          myOnClickPersonalizado={(e) =>
            this.handleClick(e, "Pasando parametro desde un evento")
          }
        />
      </div>
    );
  }
}

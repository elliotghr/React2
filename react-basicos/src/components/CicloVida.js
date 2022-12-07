import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
  }

  //   Se ejecutará cuando el componente ya no exista
  componentWillUnmount() {
    // console.log(3, "El componente ha sido eliminado del DOM");
  }
  render() {
    return <h3>{this.props.hora}</h3>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    // console.log(0, "El componente se inicializa, aún no está en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    // console.log(1, "El componente ya se encuentra en el DOM");
  }

  // Fase de actualización
  // Puede recibir dos paso de parametros
  // Obj con las props previas y  un objeto con la version previa del estado (en caso de que se actualice)
  componentDidUpdate(prevProps, prevState) {
    // console.log(2, "El estado o las props del componente han cambiado");
    // console.log(prevProps);
    // console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  render() {
    // console.log(
    //   4,
    //   "El componente se dibujo o redibuja por algún cambio en el DOM"
    // );
    
    return (
      <>
        <h2>Ciclo de vida de los componentes de clase</h2>
        {/* <h3>{this.state.hora}</h3> */}
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>iniciar</button>
        <button onClick={this.detener}>detener</button>
      </>
    );
  }
}

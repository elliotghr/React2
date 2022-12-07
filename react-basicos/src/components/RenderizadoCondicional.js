import React, { Component } from "react";
// idealmente debe ir en un archivo independiente
function Login() {
  return (
    <div>
      <h3>Login</h3>
    </div>
  );
}

// idealmente debe ir en un archivo independiente
function Logout() {
  return (
    <div>
      <h3>Logout</h3>
    </div>
  );
}

export default class RenderizadoCondicional extends Component {
  // Variable de estado para ejecutar uno u otro
  constructor(props) {
    super(props);
    this.state = {
      session: true,
    };
  }
  
  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.session ? <Login /> : <Logout />}
        {/* <Login />
        <Logout /> */}
      </div>
    );
  }
}

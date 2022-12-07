import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { EventosES6, EventosES7 } from "./components/Eventos";
import { MasSobreEventos } from "./components/Eventos";
import ComunicacionComponentes from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
// import ScrollHooks from "./components/ScrollHooks";
import ScrollHooks2 from "./components/ScrollHooks2";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizados from "./components/HooksPersonalizados";
import Referencias from "./components/Referencias";
import Prueba from "./components/Prueba";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          {/* <Componente></Componente> */}
          {/* <Componente msg="Hola soy un componente desde una prop" /> */}
          {/* <Componente msg="Hola soy un componente Funcional desde una prop" /> */}
          <Componente msg="Hola soy un componente Funcional Expresado desde una prop" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "Elliot",
              correo: "elliot879@gmail.com",
            }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={
              <Componente msg="Soy un componente pasado como prop" />
            }
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <Prueba descripcion="Los nanos son un grupo de 4 perros machos que han estado en la familia" />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks titulo="Soy un mensaje pasado por props" />
          <hr />
          <ScrollHooks2 />
          <hr></hr>
          <RelojHooks></RelojHooks>
          <hr></hr>
          <AjaxHooks></AjaxHooks>
          <hr></hr>
          <HooksPersonalizados></HooksPersonalizados>
          <hr></hr>
          <Referencias></Referencias>
          <hr></hr>
          <Formularios></Formularios>
          <hr></hr>
          <Estilos></Estilos>
          <ComponentesEstilizados></ComponentesEstilizados>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </section>
      </header>
    </div>
  );
}

export default App;

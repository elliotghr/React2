// Importación de BrowserRouter, Rutas para la web
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>ConceptosBasicos</h2>
      <Router>
        <MenuConceptos></MenuConceptos>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/acerca" component={Acerca}></Route>
          <Route exact path="/contacto" component={Contacto}></Route>
          {/* Cuando se le anteponen : a la cadena del path react sabe que es un parametro */}
          <Route exact path="/usuario/:username" component={Usuario}></Route>{" "}
          {/* Usamos internamente el hook useLocation para poder obtener los parametros de consulta */}
          <Route exact path="/productos" component={Productos}></Route>
          {/* Debe estar cargada al final */}
          {/* Redirecciones */}
          <Route exact path="/about">
            <Redirect to="/acerca"></Redirect>
          </Route>
          <Route exact path="/contact">
            <Redirect to="/contacto"></Redirect>
          </Route>
          <Route path="*" component={Error404}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;

// Diferentes formas para declarar rutas

// Importación de BrowserRouter, Rutas para la web
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Acerca from "../pages/Acerca";
// import Contacto from "../pages/Contacto";

// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>ConceptosBasicos</h2>
//       <ul>
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/acerca">acerca</a>
//         </li>
//         <li>
//           <a href="/contacto">contacto</a>
//         </li>
//       </ul>
//       <Router>
//         <Switch>
//           {/* Las rutas reciben ciertas propiedades, como: path */}
//           {/* path encuentra la ruta que coincida con la barra de direcciones */}
//           {/* exact nos permite mandar la ruta exacta a mostrar y no la primera coincidencia */}
//           <Route exact path="/">
//             <h2>Home</h2>
//             <p>Bienvenidos al tema de las Rutas en React</p>
//           </Route>
//           {/* Ruta con un componente y elementos JSX internos */}
//           <Route exact path="/acerca">
//             <Acerca></Acerca>
//             <h3>Elemento JSX interno</h3>
//           </Route>
//           {/* Ruta en una linea */}
//           {/* <Route exact path="/contacto" component={Contacto}></Route> */}
//           <Route
//             exact
//             path="/contacto"
//             children={
//               <>
//                 <Contacto></Contacto>
//                 <p>Lorem</p>
//               </>
//             }
//           ></Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// };

// export default ConceptosBasicos;

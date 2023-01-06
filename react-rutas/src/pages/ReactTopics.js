import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();
  return (
    <div>
      <h4>{topic}</h4>
      <p>Lorem</p>
    </div>
  );
};

// useRouteMatch
// toma la ruta, puede extraer el pathname, url y generar enlaces dinamicos
// el path nos permite construir rutas relativas <Route>, mientras que url nos permite construir enlaces relativos <Link> o <NavLink>
const ReactTopics = () => {
  let match = useRouteMatch();
  console.log(match);
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>ReactTopics</h2>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>PROPS</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>ESTADO</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>COMPONENTES</Link>
        </li>
      </ul>
      {/* Crearemos un switch anidado */}
      {/* No necesitamos el BrowserRouter porque ya lo contiene conceptosBasicos */}
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>Lorem</p>
        </Route>
        {/* Esto dinamicamente va a ser un paso de parametro */}
        {/* No debe de llevar el atributo exact */}
        {/* Por simplicidad se está cargando el componente Topic, lo ideal es cargar un componente independiente y con contenido diferente */}
        <Route path={`${path}/:topic`} component={Topic}></Route>
      </Switch>
    </div>
  );
};

export default ReactTopics;

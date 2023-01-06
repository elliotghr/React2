import { Redirect, Route } from "react-router";

// const PrivateRoute = (props) => {
//   // No exportaremos un elemento JSX
//   return (
//       {/* Props a recibir */}
//       <Route
//         exact={props.exact}
//         path={props.path}
//         component={props.component}
//       ></Route>
//   );
// };

// const PrivateRoute = (props) => {
//   return (
//       {/* Este componente se va a renderizar cuando mi variable de auth sea true */}
//       <Route {...props}></Route>
//   );
// };

//  Siumlar Autenticación
let auth;
auth = null;
auth = true;
// Destructuremos el componente y el resto de las props
// Le damos una alias a nuestra prop component para que reconozca que es un componente y no una etiqueta JSX
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}>
      {auth ? <Component></Component> : <Redirect to="/login"></Redirect>}
    </Route>
  );
};

export default PrivateRoute;

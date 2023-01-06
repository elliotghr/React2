import { Route } from "react-router";

const PrivateRoute = (props) => {
  // No exportaremos un elemento JSX
  return (
    <div>
      {/* Props a recibir */}
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      ></Route>
    </div>
  );
};

export default PrivateRoute;

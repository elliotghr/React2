import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import {
  NavLink as NavLinkReactRotuer,
  useParams,
  Outlet,
} from "react-router-dom";
import AuthContext from "./Auth";
import Login from "./Login";

function App() {
  const Home = () => <h2>Home</h2>;

  const SearchPage = () => {
    const tacos = ["pastor", "suadero", "campechano"];
    return (
      <div>
        <h2>Search page</h2>
        <ul>
          {tacos.map((taco, index) => (
            <li key={index}>
              <NavLink to={`/tacos/${taco}`}>{taco}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const Tacos = () => {
    const { name: tacoName } = useParams();
    return (
      <div>
        <h2>Taco {tacoName}</h2>
        {/* Pasamos una ruta relativa para nuestra ruta anidada */}
        <NavLink to={`details`}>Ir a los detalles</NavLink>
        <Outlet></Outlet>
      </div>
    );
  };
  const TacoDetails = () => {
    const { name } = useParams();
    return (
      <div>
        <h2>Taco Details {name}</h2>
      </div>
    );
  };
  const Error404 = () => <h2>Error 404, Not found.</h2>;

  // Propio NavLink
  const NavLink = ({ to, children, ...props }) => {
    return (
      <NavLinkReactRotuer
        {...props}
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
        to={to}
      >
        {children}
      </NavLinkReactRotuer>
    );
  };

  const ProtectedRoute = ({ children }) => {
    const { isAuth } = useContext(AuthContext);
    console.log(isAuth);
    if (!isAuth) {
      return <Navigate to="/login"></Navigate>;
    }
    return children;
  };

  return (
    <div>
      <header>
        <h1>Elliot shop v6</h1>
        <nav>
          <ul>
            <li>
              {/* <a href="/">Home</a>
               */}
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "is-active" : undefined;
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              {/* <a href="/search-page">SearchPage</a> */}
              <NavLink to="/search-page">SearchPage</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route
            path="/search-page"
            element={
              <ProtectedRoute>
                <SearchPage></SearchPage>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/tacos/elliotaco"
            element={<h2 style={{ color: "red" }}>EllioTaco</h2>}
          ></Route>
          <Route path="/tacos/:name" element={<Tacos></Tacos>}>
            <Route path="details" element={<TacoDetails></TacoDetails>}></Route>
          </Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

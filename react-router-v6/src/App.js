import { Route, Routes } from "react-router";
import { Link, useParams, Outlet } from "react-router-dom";

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
              <Link to={`/tacos/${taco}`}>{taco}</Link>
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
        <Link to={`details`}>Ir a los detalles</Link>
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

  return (
    <div>
      <header>
        <h1>Elliot shop v6</h1>
        <nav>
          <ul>
            <li>
              {/* <a href="/">Home</a>
               */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a href="/search-page">SearchPage</a> */}
              <Link to="/search-page">SearchPage</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/search-page"
            element={<SearchPage></SearchPage>}
          ></Route>
          <Route
            path="/tacos/elliotaco"
            element={<h2 style={{ color: "red" }}>EllioTaco</h2>}
          ></Route>
          <Route path="/tacos/:name" element={<Tacos></Tacos>}>
            <Route path="details" element={<TacoDetails></TacoDetails>}></Route>
          </Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { Link, NavLink } from "react-router-dom";

const MenuConceptos = () => {
  // Nav y Link no generan un renderizado como unas simples etiquetas a
  return (
    <nav>
      <ol>
        <li>
          <span>Menú con enlaces html (no recomendado)</span>
          <a href="/">Home</a>
          <a href="/acerca">acerca</a>
          <a href="/contacto">contacto</a>
        </li>
        <li>
          <span>Componente Link</span>
          <Link to="/">Home</Link>
          <Link to="/acerca">acerca</Link>
          <Link to="/contacto">contacto</Link>
          <Link to="/no-existe">Error 404</Link>
        </li>
        {/* Nav link ofrece un atributo activeClassName que permite añadirle css*/}
        <li>
          <span>Componente NavLink</span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            contacto
          </NavLink>
          <NavLink exact to="/" activeClassName="active">
            contacto
          </NavLink>
          <NavLink exact to="/no-existe" activeClassName="active">
            Error 404
          </NavLink>
        </li>
        <li>
          <span>Parámetros:</span>
          <Link to="/usuario/elliot">elliot</Link>
          <Link to="/usuario/nano">nano</Link>
        </li>
        <li>
          <span>Parametros de consulta:</span>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          Redirecciones :<Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span>Rutas Anidadas</span>
          <Link to="/react">React</Link>
        </li>
        <li>
          <span>Rutas privadas</span>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;

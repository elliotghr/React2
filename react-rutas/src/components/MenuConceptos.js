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
          <span>Componente Link</span>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink exact to="/acerca" activeClassName="active">acerca</NavLink>
          <NavLink exact to="/contacto" activeClassName="active">contacto</NavLink>
          <NavLink exact to="/no-existe" activeClassName="active">Error 404</NavLink>
        </li>
      </ol>
    </nav>
  );
};

export default MenuConceptos;

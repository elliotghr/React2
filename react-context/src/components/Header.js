const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Mi app sin Context</h2>
      <h3>Mi cabecera</h3>
      <select name="languages">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      ></input>
      <label htmlFor="light">Claro</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      ></input>
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar sesión</button>
    </header>
  );
};

export default Header;

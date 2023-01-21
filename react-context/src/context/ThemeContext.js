import { createContext, useState } from "react";

// 1.- Creamos nuestro contexto y lo exportamos
const ThemeContext = createContext();
// 5.- Se trae la lógica de la app y se agregan a data
const initialTheme = "light";

// 2.- Creamos un Componente que será el Provider
// Es como el BrowserRouter, provee los valores que tenga a los hijos internos que está envolviendo, para esto necesitamos hacer uso de children, para compartirle todos los valores a los componentes hijos y al final se exporta
const ThemeProvider = ({ children }) => {
  // 5.- Se trae la lógica de la app y los valores o variables a compartir se agregan a data
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") setTheme("light");
    else setTheme("dark");
  };
  // 4.- Hacemos uso de un objeto (data) que por cada prop que tenga es igual a los valores que se desean conservar en los componentes que compartan este contexto
  const data = { theme, handleTheme };
  // 3.- Retornamos un Provider de nuestro contexto, le pasamos los children (que es lo que envuelve el Proveedor) y le compartimos nuestros datos
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};
export { ThemeProvider };
export default ThemeContext;

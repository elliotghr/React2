import { useHistory, useLocation } from "react-router-dom";

const Productos = () => {
  /* Usamos internamente el hook useLocation para poder obtener los parametros de consulta */
  //   Use location trae una llave, pathname, search (donde obetndremos el paso de variables) y el state
    let location = useLocation();
    console.log(location);
  //   http://localhost:3000/productos?inicio=1&fin=20
  let { search } = useLocation();
  //   URLSearchParams serealiza los parametros
  let query = new URLSearchParams(search);
  //   console.log(query);
  //   Obtenemos cada uno de los objs de query
  const LIMIT = 20;
  //   Generamos un operador de corto circuito OR por si no pasan parametros
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;
  //   console.log(start, end);

  //   Hook que permite manejar el historial del navegador web
  let history = useHistory();
  console.log(history);
  const handlePrev = (e) => {
    history.push({
      search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`,
    });
  };
  const handleNext = (e) => {
    // Con el metodo push se pueden modificar los search params
    history.push({
      search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`,
    });
  };
  return (
    <div>
      <h2>Productos</h2>
      <p>
        Mostrando productos del
        <b> {start} </b>
        al
        <b> {end} </b>
      </p>
      {/* Condicional render */}
      {start > LIMIT && <button onClick={handlePrev}>Atras</button>}
      {/* Suponiendo que mi stock es de 100 entonces generamos un condicional render con ese # de stock */}
      {end < 100 && <button onClick={handleNext}>Adelante</button>}
    </div>
  );
};

export default Productos;

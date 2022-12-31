import { useParams } from "react-router-dom";

const Usuario = () => {
  let params = useParams();
  console.log(params);
  // useParams es un objeto donde cada prop hace referencia a cada uno de los parametros que se pasan por una url, nos permite tener urls amigables
  let { username } = params;
  return (
    <div>
      <h3>Perfil del usuario</h3>
      <p>
        Nombre del usuario
        <b> {username}</b>
      </p>
    </div>
  );
};

export default Usuario;

import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "./Auth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    login();
    // Navegación programatica
    navigate('/search-page')
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

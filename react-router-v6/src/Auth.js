import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };
  const data = {
    isAuth,
    login,
    logout,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
export { AuthProvider };
export default AuthContext;

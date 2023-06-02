import React, { useState, createContext } from "react";
// criando o contexto
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

// condições

export const AuthProvider = ({ children }) => {
  // mudar de pagina
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = (cpf, password) => {
    console.log("login auth", { cpf, password });
    if (password === "123") {
      setUser({ id: "123", cpf });
      navigate("/chart");
    } else {
      alert("Confira seu CPF ou sua senha");
    }
  };

  // sair do sistema
  const logout = () => {
    console.log("logout");
    setUser(null);
    navigate("/");
  };

  // recuperar senha se as duas forem iguais
  const senha = (newPassword, confirmNewPassword) => {
    console.log("senha auth", { newPassword, confirmNewPassword });
    if (newPassword === confirmNewPassword) {
      setUser({ id: "123", newPassword });
      navigate("/");
    } else {
      alert("Senha não confere");
    }
  };

  /* !! transforma o bolleano  */
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        login,
        logout,
        senha,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

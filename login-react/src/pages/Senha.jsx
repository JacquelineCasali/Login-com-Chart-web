import React, { useState, useContext } from "react";
// importando as validações
import { AuthContext } from "../contexts/auth";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// importando o formulario
import { Link } from "react-router-dom";
// navegação

// importando estilo
import "../styles/reset.css";
import "../styles/App.css";

// import Axios from "axios";
const Senha = () => {
  const { senha } = useContext(AuthContext);

  //  useState armazena valores
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handClikRecuperar = (e) => {
    // intercepitação do evento
    e.preventDefault();
    console.log("submit", { newPassword, confirmNewPassword });
    senha(newPassword, confirmNewPassword);
  };

  return (
    <div className="container">
      <HelmetProvider>
        <Helmet title="Recuperar Senha" />
      </HelmetProvider>

      <h1>Recuperar Senha</h1>
      <form className="login-fomr" onSubmit={handClikRecuperar}>
        <div className="half-box spacing">
          <label htmlFor="newPassword"> Nova Senha:</label>
          <input
            name="newPassword"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Digite sua Nova Senha"
          />
        </div>

        <div className="box-confirme">
          <label htmlFor="confirmNewPassword"> Confirme sua Senha:</label>
          <input
            type="password"
            name="confirmNewPassword"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            placeholder="Digite novamente sua senha"
          />
        </div>
        <button type="submit"> Salvar </button>
      </form>

      <p>
        Não possui conta?
        <Link to="../cadastro" className="telalogin">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default Senha;

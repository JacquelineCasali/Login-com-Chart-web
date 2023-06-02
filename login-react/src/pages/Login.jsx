import React, { useState, useContext } from "react";
// importando as validações
import { AuthContext } from "../contexts/auth";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// qual link ele vai chamar
import { Link } from "react-router-dom";

// importando icones
import * as Icon from "react-bootstrap-icons";
// importando estilo
import "../styles/reset.css";
import "../styles/App.css";

const Login = () => {
  const { authenticated, login } = useContext(AuthContext);
  //  useState armazena valores
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  // enviando o login
  const handleSubmit = (e) => {
    // intercepitação do evento
    e.preventDefault();
    console.log("submit", { cpf, password });
    login(cpf, password); // integração com context e com a api
  };

  return (
    <div className="container">
      <HelmetProvider>
        <Helmet title="Login" />
      </HelmetProvider>

      <h1>Login</h1>
      <p>{String(authenticated)}</p>
      <form className="login-fomr" onSubmit={handleSubmit}>
        <label htmlFor="cpf">CPF:</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          value={cpf}
          // preencher o valor
          onChange={(e) => setCpf(e.target.value)}
          placeholder="Digite seu CPF"
        />
        {/* Field cria campo input do html  */}
        <label htmlFor="password">Senha:</label>
        <input
          name="password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua Senha"
        />

        <button type="submit"> Login </button>
      </form>
      {/* <!-- recuperação de senha --> */}
      <section className="social">
        <Link to="./senha" className="forgot-pass">
          Esqueceu a senha?
        </Link>

        <div className="social-container">
          <p>Ou entre pelas suas redes sociais</p>
          {/* icones da rede social com o link */}
          <Link to="https://www.facebook.com/">
            <Icon.Facebook
              color="royalblue"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </Link>
          <Link to="https://www.linkedin.com/home">
            <Icon.Linkedin
              color="#0077b5"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </Link>
          <Link to="https://www.google.com/intl/pt-BR/gmail/about/">
            <Icon.Google
              color="red"
              size={40}
              cursor="pointer"
              className="redesocial"
            />
          </Link>
        </div>
        <div className="cadastro-container">
          <p>Não possui conta?</p>
          <Link to="./cadastro">Cadastre-se</Link>
        </div>
      </section>
    </div>
  );
};
export default Login;

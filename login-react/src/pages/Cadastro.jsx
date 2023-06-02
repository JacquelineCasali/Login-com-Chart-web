import React, { useState } from "react";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";
// rotas
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
/// conectando  banco de dados
// import Axios from "axios";
// importando estilo
import "../styles/reset.css";
import "../styles/App.css";

const Cadastro = () => {
  // const { cadastro } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const cadastro = (name, cpf, telefone, email, password, confirmPassword) => {
    console.log("cadastro", {
      name,
      cpf,
      telefone,
      email,
      password,
      confirmPassword,
    });
    setUser(null);
    navigate("/");
  };
  const handClikCadastro = (e) => {
    e.preventDefault();
    console.log("submit");
    cadastro(name, cpf, telefone, email, password, confirmPassword);
  };

  //   parte da web
  return (
    <main className="container">
      <HelmetProvider>
        <Helmet title="Cadastro de Usuário" />
      </HelmetProvider>

      <h1>Cadastro</h1>

      <form className="login-fomr" onSubmit={handClikCadastro}>
        <div className="full-box">
          <label htmlFor="name">Nome Completo:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome e Sobrenome"
            required
          />
        </div>

        {/* email */}
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="usuario12@host.com.br"
        />
        <div className="half-box spacing">
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="Digite seu CPF"
          />
        </div>
        <div className="half-box">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="(xx) xxxxx-xxxx"
          />
        </div>
        <div className="half-box spacing">
          <label htmlFor="password">Senha:</label>
          <input
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Digite sua Senha"
          />
        </div>

        <div className="half-box">
          <label htmlFor="confirmPassword"> Confirme sua Senha:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirmPassword"
            placeholder="Digite novamente sua senha"
          />
        </div>

        <label htmlFor="agreement" className="agreement-label">
          <input
            type="checkbox"
            name="agreement"
            className="agreement"
            required
            // checked
          />
          Eu li e aceito os <Link to="#">Termos de uso</Link>
        </label>

        <button className="registrar" type="submit">
          Cadastrar
        </button>
      </form>

      {/* <!-- recuperação de senha --> */}

      <p>
        Já possui conta?
        <Link to="../" className="telalogin">
          Fazer login
        </Link>
      </p>
    </main>
  );
};

export default Cadastro;

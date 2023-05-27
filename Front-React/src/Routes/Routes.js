import { React } from "react";
// rotas
// qual rota ele vai chamar
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Cadastro from "../components/Cadastro";
import Senha from "../components/Senha";

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route exact path="/cadastro" element={<Cadastro />}></Route>
      <Route exact path="/senha" element={<Senha />}></Route>
    </Routes>
  );
};

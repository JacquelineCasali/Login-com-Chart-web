import { React } from "react";
// rotas
// qual rota ele vai chamar
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import Senha from "../../pages/Senha";
import Chart from "../../pages/Chart";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route exact path="/cadastro" element={<Cadastro />}></Route>
      <Route exact path="/senha" element={<Senha />}></Route>
      <Route exact path="/chart" element={<Chart />}></Route>
    </Routes>
  );
};
export default Rotas;

import React from "react";
// rotas
// qual rota ele vai chamar
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Senha from "./pages/Senha";
import Chart from "./pages/Chart";
import { AuthProvider } from "./contexts/auth";
const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />}></Route>
          <Route exact path="/senha" element={<Senha />}></Route>
          <Route exact path="/chart" element={<Chart />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;

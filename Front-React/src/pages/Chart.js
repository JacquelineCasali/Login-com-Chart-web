import React from "react";
// importando estilo
import "../styles/reset.css";
import "../styles/chart.css";
import Header from "../components/header/Header";
// importando o titulo
import { Helmet, HelmetProvider } from "react-helmet-async";

import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
function Chart() {
  return (
    <main>
      <Header />
      <HelmetProvider>
        <Helmet title="Chart" />
      </HelmetProvider>

      <section className="chart">
        <section className="menu">
          <nav className="usuario">
            <h1 className="titulo">Usuários</h1>

            <ul class="lista-usuario">
              <li className="lista">
                <Icon.Person
                  // background="black"
                  color="black"
                  size={40}
                  cursor="pointer"
                  className="icone"
                />
                <Link to="" className="link-usuario">
                  Usuário 1
                </Link>
              </li>

              <li className="lista">
                <Icon.Person
                  // background="black"
                  color="black"
                  size={40}
                  cursor="pointer"
                  className="icone"
                />
                <Link to="" className="link-usuario">
                  Usuário 2
                </Link>
              </li>

              <li className="lista">
                <Icon.Person
                  // background="black"
                  color="black"
                  size={40}
                  cursor="pointer"
                  className="icone"
                />
                <Link to="" className="link-usuario">
                  Usuário 3
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="conversar">
          <h1 className="titulo-chart">Chart</h1>
        </section>
      </section>
    </main>
  );
}

export default Chart;

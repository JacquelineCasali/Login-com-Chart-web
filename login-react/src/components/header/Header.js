import React from "react";
import { Link } from "react-router-dom";
import "../../styles/reset.css";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <nav className="header">
        <ul>
          <li className="header-sair">
            <Link className="link-sair" to="/">
              Sair
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;

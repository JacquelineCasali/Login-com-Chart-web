import { React } from "react";
// rotas
import { BrowserRouter } from "react-router-dom";

// inportando estilo
import "./styles/reset.css";
import "./styles/App.css";
// import Login from "./components/Login";
import Routes from "./Routes/Routes";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

import { React } from "react";
// rotas
import { BrowserRouter } from "react-router-dom";

// import Login from "./components/Login";
import Routes from "./Routes/Routes";
// importando estilo
import "./styles/reset.css";
import "./styles/App.css";

// import "./banco";
function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

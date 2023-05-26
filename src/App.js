import { React } from "react";
// rotas
import { BrowserRouter } from "react-router-dom";

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

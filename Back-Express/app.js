const express = require("express");
const app = express();
const port = 9000;
const mysql = require("mysql");
var cors = require("cors");
// coneção banco de dados
const db = mysql.createPool({
  user: "root",
  password: "",
  host: "localhost",
  database: "nome_sobrenome",
});

app.use(express.json());
app.use(cors());

// pegando a rota
app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  // const agreement = req.body.agreement;

  // nao poder cadastrar cpf repetido
  db.query("SELECT * FROM cadastro WHERE cpf=? ", [cpf], (err, result) => {
    if (err) {
      res.send(err);
    }
    // verificando se o cpf ja esta cadastrado
    if (result.length == 0) {
      // cadastrando usuario
      db.query(
        "INSERT INTO cadastro (name,cpf,telefone,email,password,confirmPassword)VALUES(?,?,?,?,?,?)",
        [name, cpf, telefone, email, password, confirmPassword],
        (err, result) => {
          if (err) {
            res.send(err);
          }
          res.send({ msg: "Cadastrado com sucesso" });
        }
      );
    } else {
      res.send({ msg: "CPF já cadastrado" });
    }
  });
});
//
// rota
// app.get("/", (req, res) => {
//   db.query(
//     "INSERT INTO users (cpf,password) VALUES ('458784','456484')",
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//     }
//   );
// });

app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});

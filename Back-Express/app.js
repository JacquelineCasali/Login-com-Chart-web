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

// pegando a rota login
app.post("/", (req, res) => {
  const cpf = req.body.cpf;
  const password = req.body.password;

  // nao poder cadastrar cpf repetido
  db.query(
    "SELECT * FROM users WHERE cpf=? AND password=?",
    [cpf, password],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      // verificando se o cpf ja esta cadastrado
      if (result.length > 0) {
        res.send({ msg: "Usuario logado com sucesso" });
      } else {
        res.send({ msg: "Usuario não cadastrado " });
      }
    }
  );
});

// nao poder cadastrar cpf repetido
app.post("/cadastro", (req, res) => {
  const name = req.body.name;
  const cpf = req.body.cpf;
  const telefone = req.body.telefone;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  // const agreement = req.body.agreement;

  // nao poder cadastrar cpf repetido
  db.query("SELECT * FROM users WHERE cpf=? ", [cpf], (err, result) => {
    if (err) {
      res.send(err);
    }
    // verificando se o cpf ja esta cadastrado
    if (result.length == 0) {
      // cadastrando usuario
      db.query(
        "INSERT INTO users (name,cpf,telefone,email,password,confirmPassword)VALUES(?,?,?,?,?,?)",
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

// // // pegando a rota login
// app.post("/senha", (req, res) => {
//   const newPassword = req.body.newPassword;
//   const confirmNewPassword = req.body.confirmNewPassword;

//   db.query(
//     "SELECT * FROM senha WHERE newPassword=? AND confirmNewPassword=? ",
//     [newPassword, confirmNewPassword],
//     (err, result) => {
//       if (err) {
//         res.send(err);
//       }
//       // verificando se o cpf ja esta cadastrado
//       if (result.length == 0) {
//         // cadastrando usuario
//         db.query(
//           "INSERT INTO senha (newPassword,confirmNewPassword)VALUES(?,?)",
//           [newPassword, confirmNewPassword],
//           (err, result) => {
//             if (err) {
//               res.send(err);
//             }
//             res.send({ msg: "Cadastrado com sucesso" });
//           }
//         );
//       } else {
//         res.send({ msg: "CPF já cadastrado" });
//       }
//     }
//   );
// });

app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});

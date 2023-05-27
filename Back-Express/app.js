const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  res.send("ola");
});
app.listen(port, () => {
  console.log("Estamos rodando em: http://localhost:" + port);
});

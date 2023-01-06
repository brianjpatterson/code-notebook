const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 5000;
const jsonParser = parser.json();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("../db/code-notebook.db");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(jsonParser);

app.use(function (req, res, next) {
  //res.send("balloons");
  console.log(req.body);
  next();
});
var banana = { content: "pickles!!!" };
app.post("/banana", (req, res) => res.json(banana));

app.get("/snippets", (req, res) => {
  db.all("SELECT * FROM snippets", (err, rows) => {
    res.json(rows);
  });
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/banana", (req, res) => res.json(banana));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

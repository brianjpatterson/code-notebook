const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 5000;
const jsonParser = parser.json();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(jsonParser);

app.use(function(req, res, next) {
  //res.send("balloons");
  console.log(req.body);
  next();
});
var banana = { content: "banana!!!" };
app.post("/banana", (req, res) => res.json(banana));

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/banana", (req, res) => res.json(banana));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

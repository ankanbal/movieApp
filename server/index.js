var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var db = require("./db");
var apiPort = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});

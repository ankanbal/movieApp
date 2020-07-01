var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var db = require("./db");
var movieRouter = require("./routes/movie-router");

var app = express();
var apiPort = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

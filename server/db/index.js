var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/cinema", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

var db = mongoose.connection;

module.exports = db;

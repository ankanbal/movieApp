var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Movie = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);

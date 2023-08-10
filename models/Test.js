const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const TestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("tests", TestSchema);

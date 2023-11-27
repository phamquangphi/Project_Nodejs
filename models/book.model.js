const mongoose = require("mongoose");
const book = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
});
module.exports = mongoose.model("books", book);

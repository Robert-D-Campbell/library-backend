const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
});
bookSchema.set("timestamps", true);

module.exports = mongoose.model("Book", bookSchema);

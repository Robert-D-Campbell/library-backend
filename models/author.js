const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
});
authorSchema.set("timestamps", true);

module.exports = mongoose.model("Author", authorSchema);

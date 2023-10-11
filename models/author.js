const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    books: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Author", authorSchema);

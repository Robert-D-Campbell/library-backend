const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    authors: [
      {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "Author",
      },
    ],
  },
  {
    timestamps: true,
  }
);
bookSchema.set("timestamps", true);

module.exports = mongoose.model("Book", bookSchema);

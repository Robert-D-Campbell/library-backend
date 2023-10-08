const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    topic: [
      {
        required: true,
        type: String,
      },
    ],
    authors: [
      {
        required: true,
        type: mongoose.Types.ObjectId,
        ref: "Author",
      },
    ],
    location: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
bookSchema.set("timestamps", true);

module.exports = mongoose.model("Book", bookSchema);

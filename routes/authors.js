const express = require("express");
const Author = require("../models/author");

const router = express.Router();

module.exports = router;

//Create Author
router.post("/create", async (req, res) => {
  console.log("req.body.name", req.body);
  const data = new Author({
    name: req.body.name,
    books: req.body.books,
  });
  try {
    const savedData = await data.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all authors
router.get("/", async (req, res) => {
  try {
    const data = await Author.find()
      .populate("books")
      .then((book) => {
        res.json(book);
      });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get author using id
router.get("/:id", async (req, res) => {
  try {
    const data = await Author.findById(req.params.id)
      .populate("books")
      .then((book) => {
        res.json(book);
      });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update author using id
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Author.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete author using id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Author.findByIdAndDelete(id);
    res.send(`${data.name} with id ${id} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const express = require("express");
const Book = require("../models/book");

const router = express.Router();

module.exports = router;

//Create book
router.post("/create", async (req, res) => {
  console.log("req.body.title", req.body);
  const data = new Book({
    title: req.body.title,
  });
  try {
    const savedData = await data.save();
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all books
router.get("/", async (req, res) => {
  try {
    const data = await Book.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get book using id
router.get("/:id", async (req, res) => {
  try {
    const data = await Book.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update book using id
router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Book.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete book using id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Book.findByIdAndDelete(id);
    res.send(`${data.title} with id ${id} has been deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

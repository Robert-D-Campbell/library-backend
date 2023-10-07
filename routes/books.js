const express = require("express");
const Book = require("../models/book");

const router = express.Router();

module.exports = router;

//Create book
router.post("/create", (req, res) => {
  res.send("Create Book");
});

//Get all books
router.get("/", (req, res) => {
  res.send("Get All Books");
});

//Get book using id
router.get("/:id", (req, res) => {
  res.send(req.params.id);
});

//Update book using id
router.patch("/:id", (req, res) => {
  res.send("Update Book");
});

//Delete book using id
router.delete("/:id", (req, res) => {
  res.send("Delete Book");
});

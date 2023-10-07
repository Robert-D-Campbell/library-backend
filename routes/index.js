const express = require("express");

const router = express.Router();

module.exports = router;

//Get all books
router.get("/", (req, res) => {
  res.send("Healthy API");
});

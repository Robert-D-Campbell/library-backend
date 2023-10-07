const express = require("express");
const indexRouter = require("../routes/index");
const bookRouter = require("../routes/books");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api", indexRouter);
  app.use("/books", bookRouter);
};

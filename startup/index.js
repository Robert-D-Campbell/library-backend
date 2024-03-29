const express = require("express");
const indexRouter = require("../routes/index");
const bookRouter = require("../routes/books");
const authorRouter = require("../routes/authors");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api", indexRouter);
  app.use("/api/books", bookRouter);
  app.use("/api/authors", authorRouter);
};

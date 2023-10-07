const express = require("express");
var indexRouter = require("../routes/index");
var bookRouter = require("../routes/books");

module.exports = function (app) {
  app.use(express.json());

  app.use("/api", indexRouter);
  app.use("/books", bookRouter);
};

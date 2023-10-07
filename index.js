require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const mongoConnectStr = process.env.DB_URL;

mongoose.connect(mongoConnectStr);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Connected to MongoDB");
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

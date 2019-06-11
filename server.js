const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT;

require("./db/db");

// Routes

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/users')

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(PORT, err => {
  console.log(err || "App is listening on port, ", PORT);
});

module.exports = app;

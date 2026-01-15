/** @format */

const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("App is running");
});

//DEv or pord env
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

module.exports = app;

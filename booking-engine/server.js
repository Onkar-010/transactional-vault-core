/** @format */

const app = require("./app");
const mongoose = require("mongoose");

//Enableing environement variable
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//Connecting to Database
const DB = process.env.MONGO_URL.replace("<PASSWORD>", process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => {
  console.log("DB Connection Successfully");
});

//Starting the Server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("App started for listening request's on port: " + `${port}`);
});

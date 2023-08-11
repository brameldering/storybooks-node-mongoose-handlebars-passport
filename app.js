const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const TestModel = require("./models/Test.js");

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Initialize logger and catch uncaught exceptions
const logger = require("./helpers/logger");
process.on("uncaughtException", function (err) {
  logger.error("Caught exception: " + err);
});

const app = express();

const { mongoURI } = require("./config/database");
mongoose
  .connect(mongoURI)
  .then(() => {
    logger.info("MongoDB Connected ");
  })
  .catch((err) => logger.error(err));

app.get("/", (req, res) => {
  logger.info("Get/ received");
  res.send("It Works");
});

app.post("/test", urlencodedParser, (req, res) => {
  const name = req.body.name;
  logger.info("About to save to db");
  const newTest = {
    name: name,
  };
  new TestModel(newTest)
    .save()
    .then(() => {
      logger.info("Test " + newTest.name + " saved");
    })
    .catch((err) => {
      logger.error("Error saving test " + newTest.name + " to db: " + err);
    })
    .finally(() => {
      res.redirect("/");
    });
});

const port = process.env.port || 5000;
app.listen(port, () => {
  logger.info("Server started on port " + port);
});

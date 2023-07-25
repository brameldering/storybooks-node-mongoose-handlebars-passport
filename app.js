const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Initialize logger and catch uncaught exceptions
const logger = require("./helpers/logger");
process.on("uncaughtException", function (err) {
  logger.error("Caught exception: " + err);
});

app.get("/", (req, res) => {
  res.send("It Works");
});

const port = process.env.port || 5000;
app.listen(port, () => {
  logger.info("Server start on port " + port);
});

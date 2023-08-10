const logger = require("../helpers/logger.js");

require("dotenv").config();

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const cluster = process.env.MONGO_CLUSTER;
const db = process.env.MONGO_DB;

// if (process.env.NODE_ENV === "production") {
// Export DB URI for Mongo Atlas
// logger.info("production environment");
const dbURI = `mongodb+srv://${username}:${password}@${cluster}/${db}?retryWrites=true&w=majority`;
logger.info("dbURI: " + dbURI);
module.exports = { mongoURI: dbURI };
// } else {
//   logger.info("development environment");
// Export DB URI for local Mongo DB
//   const dbURI = `mongodb://127.0.0.1:27017/vidjot-dev`;
//   module.exports = { mongoURI: dbURI };
// }

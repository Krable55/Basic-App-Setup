const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/btt", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("connected", function(error) {
  if (error) {
    console.error(error, "ERROR!!!!!");
  } else {
    console.log("Connected to MongoDB");
  }
});

module.exports = db;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: String
  },
  { strict: false }
);

module.exports = user = mongoose.model("User", userSchema);

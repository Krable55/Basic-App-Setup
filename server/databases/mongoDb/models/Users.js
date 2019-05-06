const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true }
  },
  { strict: false }
);

module.exports = userMongo = mongoose.model("User", userSchema);

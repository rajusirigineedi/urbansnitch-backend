const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  // etc. think of other fields
});

const User = mongoose.model("User", userSchema);

module.exports = User;

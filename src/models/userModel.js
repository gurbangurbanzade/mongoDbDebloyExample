const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: String,
    _id: Object.id,
  },
  { collection: "Users", timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;

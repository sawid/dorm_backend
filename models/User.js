const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    enabled: {
      type: Boolean,
      default: false,
    },
    firstname: {
      type: String,
      default: "",
    },
    lastname: {
      type: String,
      default: "",
    },
    telnumber: {
      type: String,
      default: "",
    },
    Email: {
      type: String,
      default: "",
    },
    cellnumber: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model('users', UserSchema);

const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
    },
    detailProblem: {
      type: String,
    },
    isFix: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Problem = mongoose.model("problems", ProblemSchema);

const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema(
  {
    waterPriceUnit: {
      type: Number,
      default: 0,
    },
    electricPriceUnit: {
      type: Number,
      default: 0,
    },
    commonFee: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Cost = mongoose.model("costs", CostSchema);

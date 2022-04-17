const mongoose = require("mongoose");

const CostSchema = new mongoose.Schema(
  {
    waterPriceUnit: {
      type: Double,
      default: 0,
    },
    electricPriceUnit: {
      type: Double,
      default: 0,
    },
    commonFee: {
      type: Double,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Cost = mongoose.model("costs", CostSchema);

const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
    },
    isBillNotified: {
      type: Boolean,
      default: false,
    },
    isPayed: {
      type: Boolean,
      default: false,
    },
    rentalFee: {
      type: Double,
      default: 0,
    },
    waterUnitLastMonth: {
      type: Double,
      default: 0,
    },
    waterUnitThisMonth: {
      type: Double,
      default: 0,
    },
    electricUnitLastMonth: {
      type: Double,
      default: 0,
    },
    electricUnitThisMonth: {
      type: Double,
      default: 0,
    },
    month: {
      type: String,
    },
    rentalNet: {
      type: Double,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Bill = mongoose.model("bills", BillSchema);

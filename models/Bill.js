const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
    },
    month: {
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
      type: Number,
      default: 0,
    },
    waterUnitLastMonth: {
      type: Number,
      default: 0,
    },
    waterUnitThisMonth: {
      type: Number,
      default: 0,
    },
    electricUnitLastMonth: {
      type: Number,
      default: 0,
    },
    electricUnitThisMonth: {
      type: Number,
      default: 0,
    },
    rentalNet: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = Bill = mongoose.model("bills", BillSchema);

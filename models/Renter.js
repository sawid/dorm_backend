const mongoose = require("mongoose");

const RenterSchema = new mongoose.Schema(
  {
    renterName: {
      type: String,
    },
    lineId: {
      type: String,
      default: "-",
    },
    telNum: {
      type: String,
      default: "None",
    },
    contactCreate: {
        type: Date,
        default: "01/01/1970",
    },
  },
  { timestamps: true }
);

module.exports = Renter = mongoose.model("renters", RenterSchema);

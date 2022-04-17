const mongoose = require("mongoose");

const RenterSchema = new mongoose.Schema(
  {
    renterName: {
      type: String,
    },
    lineId: {
      type: String,
    },
    telNum: {
      type: String,
    },
    contactCreate: {
        type: Date,
    },
  },
  { timestamps: true }
);

module.exports = Renter = mongoose.model("renters", RenterSchema);

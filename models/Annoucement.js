const mongoose = require("mongoose");

const AnnoucementSchema = new mongoose.Schema(
  {
    annoucementText: {
      type: String,
    },
    annoucementUser: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Annoucement = mongoose.model("annoucements", AnnoucementSchema);

const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
    },
    renterId: {
      type: String,
      default: "none",
    },
    amountBed: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      default: "empty",
    },
    rentalFee: {
      type: Number,
      default: 0,
    },
    contactLength: {
      type: Number,
      default: 0,
    },
    room_type: {
      type: String,
      default: "fan",
    },
  },
  { timestamps: true }
);

module.exports = Room = mongoose.model("rooms", RoomSchema);

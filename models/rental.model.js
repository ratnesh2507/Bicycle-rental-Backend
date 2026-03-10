const mongoose = require("mongoose");

const RentalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bike: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bike",
      required: true,
    },
    rentedAt: {
      type: Date,
      default: Date.now,
    },
    returnedAt: {
      type: Date,
      default: null,
    },
    totalKm: {
      type: Number,
      default: null,
    },
    totalCost: {
      type: Number,
      default: null,
    },
    status: {
      type: String,
      enum: ["active", "returned"],
      default: "active",
    },
  },
  { timestamps: true },
);

const Rental = mongoose.model("Rental", RentalSchema);
module.exports = Rental;

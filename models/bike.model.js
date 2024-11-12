const mongoose = require("mongoose");

const BikeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter bike name"],
    },

    model: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },

    available: {
      type: Boolean,
      required: true,
    },

    rent_per_km: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Bike = mongoose.model("Bike", BikeSchema);
module.exports = Bike;

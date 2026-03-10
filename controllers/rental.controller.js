const Rental = require("../models/rental.model");
const Bike = require("../models/bike.model");

// POST /api/rentals/rent
const rentBike = async (req, res) => {
  try {
    const { bikeId } = req.body;
    const userId = req.user._id;

    if (!bikeId) {
      return res.status(400).json({ message: "Please provide a bikeId" });
    }

    const bike = await Bike.findById(bikeId);
    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }
    if (!bike.available) {
      return res
        .status(400)
        .json({ message: "Bike is not available for rent" });
    }

    const existing = await Rental.findOne({ user: userId, status: "active" });
    if (existing) {
      return res.status(400).json({
        message: "You already have an active rental. Return it first.",
      });
    }

    const [rental] = await Promise.all([
      Rental.create({ user: userId, bike: bikeId }),
      Bike.findByIdAndUpdate(bikeId, { available: false }),
    ]);

    const populated = await rental.populate(
      "bike",
      "name model image rent_per_km",
    );

    res
      .status(201)
      .json({ message: "Bike rented successfully", rental: populated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST /api/rentals/return
const returnBike = async (req, res) => {
  try {
    const { rentalId, totalKm } = req.body;
    const userId = req.user._id;

    if (!rentalId) {
      return res.status(400).json({ message: "Please provide a rentalId" });
    }

    const rental = await Rental.findById(rentalId).populate("bike");
    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }
    if (rental.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Not your rental" });
    }
    if (rental.status === "returned") {
      return res.status(400).json({ message: "Bike already returned" });
    }

    const km = totalKm && totalKm > 0 ? Number(totalKm) : null;
    const cost = km ? Math.round(km * rental.bike.rent_per_km) : null;

    await Promise.all([
      Rental.findByIdAndUpdate(rentalId, {
        returnedAt: new Date(),
        status: "returned",
        totalKm: km,
        totalCost: cost,
      }),
      Bike.findByIdAndUpdate(rental.bike._id, { available: true }),
    ]);

    const updated = await Rental.findById(rentalId).populate(
      "bike",
      "name model image rent_per_km",
    );

    res
      .status(200)
      .json({ message: "Bike returned successfully", rental: updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/rentals/history
const getRentalHistory = async (req, res) => {
  try {
    const rentals = await Rental.find({ user: req.user._id })
      .populate("bike", "name model image rent_per_km")
      .sort({ createdAt: -1 });

    res.status(200).json({ rentals });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET /api/rentals/active
const getActiveRental = async (req, res) => {
  try {
    const rental = await Rental.findOne({
      user: req.user._id,
      status: "active",
    }).populate("bike", "name model image rent_per_km");

    res.status(200).json({ rental: rental || null });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { rentBike, returnBike, getRentalHistory, getActiveRental };

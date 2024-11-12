const Bike = require("../models/bike.model");

// CREATE A BIKE
const createBike = async (req, res) => {
  try {
    const bike = await Bike.create(req.body);
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL BIKES
const getBikes = async (req, res) => {
  try {
    const bikes = await Bike.find({});
    res.status(200).json(bikes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET A SINGLE BIKE
const getBike = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await Bike.findById(id);
    res.status(200).json(bike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE OR EDIT A BIKE
const updatedBike = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await Bike.findByIdAndUpdate(id, req.body);
    if (!bike) {
      return res.status(400).json({ message: "Bike not found" });
    }
    const updatedBike = await Bike.findById(id);
    res.status(200).json(updatedBike);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE A BIKE
const deleteBike = async (req, res) => {
  try {
    const { id } = req.params;
    const bike = await Bike.findByIdAndDelete(id);
    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }
    res.status(200).json({ message: "Bike deleted successfully" });
  } catch (errror) {
    res.status(500).json({ message: errror.message });
  }
};

module.exports = {
  createBike,
  getBikes,
  getBike,
  updatedBike,
  deleteBike,
};

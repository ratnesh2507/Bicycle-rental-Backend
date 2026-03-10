const express = require("express");
const router = express.Router();
const {
  createBike,
  getBikes,
  getBike,
  updatedBike,
  deleteBike,
} = require("../controllers/bike.controller");
const { protect } = require("../middleware/auth.middleware");

// Public — anyone can browse bikes
router.get("/", getBikes);
router.get("/:id", getBike);

// Protected — must be logged in to create, edit, delete
router.post("/", protect, createBike);
router.put("/:id", protect, updatedBike);
router.delete("/:id", protect, deleteBike);

module.exports = router;

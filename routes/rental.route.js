const express = require("express");
const router = express.Router();
const {
  rentBike,
  returnBike,
  getRentalHistory,
  getActiveRental,
} = require("../controllers/rental.controller");
const { protect } = require("../middleware/auth.middleware");

router.use(protect); // all rental routes require login

router.post("/rent", rentBike);
router.post("/return", returnBike);
router.get("/history", getRentalHistory);
router.get("/active", getActiveRental);

module.exports = router;

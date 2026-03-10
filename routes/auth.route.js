const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/auth.controller");
const { protect } = require("../middleware/auth.middleware");

// Public
router.post("/register", register);
router.post("/login", login);

// Protected — returns the logged-in user's profile
router.get("/me", protect, getMe);

module.exports = router;

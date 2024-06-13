const express = require("express");
const router = express.Router();

const { createBike, getBikes, getBike, updatedBike, deleteBike } = require('../controllers/bike.controller.js');

router.post('/', createBike);
router.get('/', getBikes);
router.get('/:id', getBike);
router.put('/:id', updatedBike);
router.delete('/:id', deleteBike);

module.exports = router;
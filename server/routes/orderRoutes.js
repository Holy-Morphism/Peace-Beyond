const express = require("express");
const router = express.Router();

const {
    saveReservation,
} = require("../controllers/ordersController");

// Sign in route , creating user
router.post("/saveReservation", saveReservation);
module.exports = router;

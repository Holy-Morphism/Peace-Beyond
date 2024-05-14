const express = require("express");
const router = express.Router();

const {
    saveReservation,
} = require("../controllers/reservationController");

// Sign in route , creating user
router.post("/create", saveReservation);

module.exports = router;


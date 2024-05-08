const express = require("express");
const router = express.Router();

const {
    getDestinations,
    getDestination,
    addDestination,
    deleteDestination,
    } = require("../controllers/destinationController");

// Get all destinations
router.get("/destinations", getDestinations);

// Get a destination
router.get("/destinations/:id", getDestination);

// Add a destination
router.post("/destinations", addDestination);

// Delete a destination
router.delete("/destinations/:id", deleteDestination);
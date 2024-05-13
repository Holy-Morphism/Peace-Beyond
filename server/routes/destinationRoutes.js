const express = require("express");
const router = express.Router();

const {
  getDestinations,
  getDestination,
  addDestination,
  deleteDestination,
  getDestinationsSkipAndLimit,
} = require("../controllers/destinationController");

// Get all destinations
router.get("/", getDestinations);

// Get a destination
router.get("/:id", getDestination);

// Add a destination
router.post("/", addDestination);

// Delete a destination
router.delete("/:id", deleteDestination);

router.get("/page", getDestinationsSkipAndLimit);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getUser,
  updateEmail,
  updatePassword,
  updateFirstName,
  updateLastName,
} = require("../controllers/userController");


//Get user
router.get("/", getUser);

// Update email route
router.put("/update/email", updateEmail);

// Update password route
router.put("/update/password", updatePassword);

// Update name route
router.put("/update/firstname", updateFirstName);

// Update name route
router.put("/update/lastname", updateLastName);

module.exports = router;

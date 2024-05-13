const express = require("express");
const router = express.Router();

const {
    loginAdmin,
    deleteAdmin,
    signupAdmin,
} = require("../controllers/adminController");

// Sign in route , creating user
router.post("/signup", signupAdmin);

// Log in route
router.post("/login", loginAdmin);

// delete route
router.delete("/logout", deleteAdmin);

module.exports = router;

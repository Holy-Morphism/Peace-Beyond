const express = require("express");
const router = express.Router();

const {
    loginAdmin,
    deleteAdmin,
    signupAdmin,
    getAdmin,
} = require("../controllers/adminController");

// Sign in route , creating user
router.post("/signup", signupAdmin);

// Log in route
router.post("/login", loginAdmin);

router.get("/admin", getAdmin);

// delete route
router.delete("/delete", deleteAdmin);

module.exports = router;

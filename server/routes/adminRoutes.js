const express = require("express");
const router = express.Router();

const {
  createAdmin,
  loginAdmin,
  findAdminById,
} = require("../controllers/adminController");


// Sign in route , creating user
router.post("/signup", createAdmin);

// Log in route
router.post("/login", loginAdmin);



module.exports = router;

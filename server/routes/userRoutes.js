const express = require("express");
const router = express.Router();

const { createUser,logInUser } = require("../controllers/userController");


// Sign in route , creating user
router.post("/signup", createUser);

// Log in route
router.post("/login", logInUser);

module.exports = router;

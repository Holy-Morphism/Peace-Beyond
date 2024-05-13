const express = require("express");
const router = express.Router();

const {
  signUpUser,
  logInUser,
  logOutUser,
} = require("../controllers/authenticationController");

// Sign in route , creating user
router.post("/signup", signUpUser);

// Log in route
router.post("/login", logInUser);

// Log out route
router.get("/logout", logOutUser);

module.exports = router;

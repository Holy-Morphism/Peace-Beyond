const express = require("express");
const router = express.Router();

const {
  signUpUser,
  logInUser,
  logOutUser,
  getRole,
} = require("../controllers/authenticationController");

// Sign in route , creating user
router.post("/signup", signUpUser);

// Log in route
router.post("/login", logInUser);

// Log out route
router.get("/logout", logOutUser);

// get role
router.get("/logout", getRole);
module.exports = router;

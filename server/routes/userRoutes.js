const express = require("express");
const router = express.Router();

const {
  signUpUser,
  logInUser,
  getUser,
  logOutUser,
} = require("../controllers/userController");

// Sign in route , creating user
router.post("/signup", signUpUser);

// Log in route
router.post("/login", logInUser);

//Get user
router.get("/user", getUser);

// Log out route
router.get("/logout", logOutUser);

module.exports = router;

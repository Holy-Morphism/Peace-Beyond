const express = require("express");
const router = express.Router();

const {
  signUpUser,
  logInUser,
  getUser,
  logOutUser,
  updateEmail,
  updatePassword,
  updateFirstName,
  updateLastName,
} = require("../controllers/userController");

// Sign in route , creating user
router.post("/signup", signUpUser);

// Log in route
router.post("/login", logInUser);

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

// Log out route
router.get("/logout", logOutUser);

module.exports = router;

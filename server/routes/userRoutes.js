const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs"); // For password hashing

// Sign in route
router.post("/api/signin", async (req, res) => {
  try {
    const userData = req.body;
    // Hash the password before saving the user
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = await User.create(userData);
    res.json({ status: "ok", data: user });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
});

// Log in route
router.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ status: "error", error: "Invalid email/password" });
    } // Check if the password is correct
    else if (await bcrypt.compare(password, user.password)) {
      // The password is correct
      return res.json({ status: "ok", data: user });
    } else {
      // The password is incorrect
      return res.json({ status: "error", error: "Invalid email/password" });
    }
  } catch (error) {
    res.json({ status: "error", error: error });
  }
});

module.exports = router;

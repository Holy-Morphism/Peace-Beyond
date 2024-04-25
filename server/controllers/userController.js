const express = require("express");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs"); // For password hashing

const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);
    res.json({ status: "ok", user });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const logInUser = async (req, res) => {
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
};

module.exports = { createUser: signUpUser, logInUser };

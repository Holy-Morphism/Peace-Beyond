const User = require("../models/userModel");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.signup(firstName, lastName, email, password);
    //convert ObjectID to string
    const id = user._id.toString();
    // Create a token
    const token = createToken(id);
    console.log(token);
    res.json({ status: "ok", token });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const logInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //obtain id form ObjectId
    const id = user._id.toString();
    //create token
    const token = createToken(id);
    res.json({ status: "ok", token });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = { createUser: signUpUser, logInUser };

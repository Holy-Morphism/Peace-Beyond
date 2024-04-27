const User = require("../models/userModel");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.signup(name, email, password);
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

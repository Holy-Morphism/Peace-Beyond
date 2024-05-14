const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const getUser = async (req, res) => {
  const cookie = req.cookies.jwt;
  //check if jwt cookie exists

  try {
    if (cookie) {
      const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
      const user = await User.getUser(decoded.id);
      res.json({ status: "ok", user });
    } else {
      res.json({ status: "error", error: "User not authenticated" });
    }
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};


const updateEmail = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.updateEmail(decoded.id, req.body.email);
    res.json(user);
  } catch (error) {
    res.json({ status: "error", error: error.message });  }
};

const updatePassword = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.updatePassword(decoded.id, req.body.password);
    res.json(user);
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const updateFirstName = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.updateFirstName(decoded.id, req.body.firstName);
    res.json(user);
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const updateLastName = async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.updateLastName(decoded.id, req.body.lastName);
    res.json(user);
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

module.exports = { getUser,  updateEmail, updatePassword, updateFirstName, updateLastName };

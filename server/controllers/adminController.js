const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
  };

const createAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const admin = await Admin.signUp(username, email, password);
    const id = admin._id.toString();
    const token = createToken(id);
    res.json({ status: "ok", token });
  } catch (error) {
    res.json({ status: "error", error: error.message });  }
};

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.login(username, password);
    const id = admin._id.toString();
    const token = createToken(id);
    res.json({ status: "ok", token });
  } catch (error) {
    res.json({ status: "error", error: error.message });  }
};

const findAdminById = async (req, res) => {
  try {
    const { id } = req.body;
    const admin = await Admin.findAdminById(id);
    res.json({ status: "ok", admin });
  } catch (error) {
    res.json({ status: "error", error: error.message });  }
};

module.exports = { createAdmin,loginAdmin, findAdminById };
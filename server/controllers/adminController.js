const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken");
const { createToken } = require("../utils/utils");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    // Generate a JWT token
    const token = jwt.sign({ adminId: admin._id }, "secretKey");

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const { adminId } = req.params;

    // Find the admin by ID
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Delete the admin
    await admin.remove();

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const signupAdmin = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(firstName, lastName, email, password);
  try {
    // Check if admin already exists
    const admin = await Admin.signup(
      firstName,
      lastName,
      email,
      password
    );

    const id = admin._id.toString();
    // Create a token
    const token = createToken(id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });

    res.json({ status: "ok", token });
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", error: error.message });
  }
};

const getAdmin = async (req, res) => {
  const cookie = req.cookies.jwt;
  //check if jwt cookie exists
  console.log(cookie);
  try {
    if (cookie) {
      console.log("cookie");
      const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
      const admin = await Admin.getAdmin(decoded.id);
      res.json({ status: "ok", admin });
    } else {
      res.json({ status: "error", error: "admin not authenticated" });
    }
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};
module.exports = {
  loginAdmin,
  deleteAdmin,
  signupAdmin,
  getAdmin,
};

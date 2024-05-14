const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For password hashing
const validator = require("validator");

const Admin = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "admins" }
);

Admin.statics.signUp = async function (username, email, password) {
  // Validation
  if (!email || !password || !username) {
    throw new Error("All fields are required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid email");
  }

  const adminExists = await this.findOne({ email });
  if (adminExists) {
    throw new Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await this.create({
    username,
    email,
    password: hashedPassword,
  });

  return admin;
};

Admin.statics.login = async function (username, password) {
  const admin = await this.findOne({ username });
  if (!admin) {
    throw new Error("Invalid username or password");
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    throw new Error("Invalid username or password");
  }

  return admin;
};

User.statics.findAdminById = async function (id) {
  const admin = await this.findById(id);
  return !!admin;
};

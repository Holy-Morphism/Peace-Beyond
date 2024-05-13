const mongoose = require('mongoose');
const bcrypt = require("bcryptjs"); // For password hashing
const validator = require("validator");


// Define the schema for the admin model
const Admin = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
      },
      { collection: "admins" }
);

Admin.statics.signup = async function (firstName, lastName, email, password) {
  //validation
  if (!email || !password || !firstName || !lastName) {
    throw Error("All fields are required");
  }

  if (!validator.isLength(firstName, { min: 2, max: 50 })) {
    throw Error("first name must be between 2 and 50 characters");
  }

  if (!validator.isLength(lastName, { min: 2, max: 50 })) {
    throw Error("Last name must be between 2 and 50 characters");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }

  if (validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Admin already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const admin = await this.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  return admin;
};

Admin.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and password are required");
  }
  const admin = await this.findOne({ email });

  if (!admin) {
    throw Error("Admin not found");
  }

  const match = await bcrypt.compare(password, admin.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return admin;
};

Admin.statics.logout = async function () {
  return;
};

Admin.statics.getAdmin = async function (id) {
  const admin = await this.findById(id);
  if (!admin) {
    throw Error("Admin not found");
  }
  return admin;
};


Admin.statics.deleteUser = async function (adminId) {
  const admin = await this.findByIdAndDelete(adminId);
  if (!admin) {
    throw Error("User not found");
  }
  return admin;
};

module.exports = mongoose.model('Admin', Admin);
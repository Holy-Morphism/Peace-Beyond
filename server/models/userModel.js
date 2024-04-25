const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // For password hashing
const validator = require("validator");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

User.statics.signup = async function (name, email, password) {
  //validation
  if (!email || !password || !name) {
    throw  Error("All fields are required");
  }

  if (!validator.isLength(name, { min: 2, max: 50 })) {
    throw Error("Name must be between 2 and 50 characters");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  
  if (validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ name, email, password: hashedPassword });

  return user;
};

module.exports = mongoose.model("User", User);

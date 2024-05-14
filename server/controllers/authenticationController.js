const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const signUpUser = async (req, res) => {
  const { firstName, lastName, email, password ,avatarURL} = req.body;
  console.log(req.body);
  try {
    const user = await User.signup(firstName, lastName, email, password,avatarURL);
    //convert ObjectID to string
    const id = user._id.toString();
    // Create a token
    const token = createToken(id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });
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
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000, //3 days
    });
    res.json({ status: "ok", token });
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};

const logOutUser = async (req, res) => {
    try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.json({ status: "ok" });
      console.log("User logged out successfully");
    } catch (error) {
      console.error("An error occurred during logout:", error);
      res
        .status(500)
        .json({ status: "error", message: "An error occurred during logout" });
    }
  };

  const getRole = async (req, res) => { 
    try {
      const cookie = req.cookies.jwt;
      if (cookie) {
        const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
        const user = await User.getUser(decoded.id);
        res.json({ status: "ok", role: user.role });
      } else {
        res.json({ status: "error", error: "User not authenticated" });
      }
    } catch (error) {
      res.json({ status: "error", error: error.message });
    }
  }


  module.exports = { signUpUser, logInUser, logOutUser,getRole };
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const PORT = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/peace-and-beyond");

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/peace-and-beyond")
//   .then(() => {
//     console.log("Successfully connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB", error);
//     process.exit(1);
//   });

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

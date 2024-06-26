require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authenticationRoutes");
const reservationRoutes = require("./routes/reservationRoutes")
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  });

app.use("/api/auth",authRoutes );
app.use("/api/user", userRoutes);
app.use("/api/destination", destinationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/reservation", reservationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

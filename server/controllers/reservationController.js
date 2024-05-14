const reservation = require("../models/reservationModel");
const Destination = require("../models/destinationModel");
const jwt = require("jsonwebtoken");

const saveReservation = async (req, res) => {
  const cookie = req.cookies.jwt;
  const id = req.body;
  try {
    if (cookie) {
      const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
      const dest = await Destination.getDestination(id);
      const reservedData = await reservation.saveReservation(
        dest._id,
        decoded.id
      );
      res.json({ status: "ok", reservedData });
    } else {
      res.json({ status: "error", error: "User not authenticated" });
    }
  } catch (error) {
    res.json({ status: "error", error: error.message });
  }
};
module.exports = { saveReservation };

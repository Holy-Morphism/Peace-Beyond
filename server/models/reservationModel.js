const mongoose = require("mongoose");

const Reservation = new mongoose.Schema(
  {
    destinationID: { type: String },
    userID: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now },
  },
  { collection: "reservation" }
);

Reservation.statics.saveReservation = async function (destinationID, userID) {
  if (!destinationID || !userID) {
    throw("Missing IDs")
  }

  const reservation = await this.create(destinationID, userID);
  return reservation;
};

module.exports = mongoose.model("Reservation", Reservation);

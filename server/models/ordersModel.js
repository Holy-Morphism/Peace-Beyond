const mongoose=require('mongoose');
const reservation = new mongoose.Schema({
    id: String,
    title: String,
    host: String,
    price: Number,
    description: String,
    from: Date,
    to: Date,
  });

reservation.statics.saveReservation = async function (data) {
    const reservation = new this.insertMany(data);
    return reservation.save();
  };

module.exports = mongoose.model('Reservation', reservation);
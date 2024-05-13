const mongoose = require("mongoose");

const Destination = new mongoose.Schema(
  {
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true },
    rating: { type: Number, required: true },
    hostID: { type: String, required: true },
  },
  { collection: "destinations" }
);

Destination.statics.getDestinations = async function () {
  const destinations = await this.find({},'id title price image');
  return destinations;
};

Destination.statics.getDestination = async function (id) {
  const destination = await this.findOne({ id });
  return destination;
};

Destination.statics.addDestination = async function (destination) {
    const newDestination = await this.create(destination);
    return newDestination;
    }

Destination.statics.deleteDestination = async function (id) {
    const destination = await this.findOneAndDelete({ id });
    return destination;
}

module.exports = mongoose.model("Destination", Destination);
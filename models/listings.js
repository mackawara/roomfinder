const mongoose = require("mongoose");
const ListingSchema = new mongoose.Schema({
  range: {
    type: String,
    required: false,
  },
  rooms: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },

  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },

  fullAddress: {
    type: String,
    required: false,
  },
  pic1: {
    type: String,
    required: false,
  },
  pic2: {
    type: String,
    required: false,
  },
  gps: {
    type: String,
    required: false,
  },
});
const ListingModel = mongoose.model("listing", ListingSchema);

module.exports = ListingModel;

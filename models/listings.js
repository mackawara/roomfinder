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
  image: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const ListingModel = mongoose.model("listing", ListingSchema);

module.exports = ListingModel;

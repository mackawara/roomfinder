const mongoose = require("mongoose");
const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },

  location: {
    type: String,
    required: false,
  },

  fullAddress: {
    type: String,
    required: false,
  },
  pic1: {
    type: String,
    required: true,
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
const saveListing = async (req, res, next) => {
  const body = req.body;
  console.log(req.body.owner);
  console.log(req.body.title);
  console.log(req.body.description);
  console.log(req.body.city);

  const newListing = new ListingModel({
    owner: body.owner,
    title: body.title,
    type: body.type,
    description: body.description,
    city: body.city,
    pic1:body.pic1,
    /* location: body.description,
    fullAddress: body.fullAddress,
    pic1: body.fullAddress,
    pic2: body.pic2,
    gps: body.gps, */
  });

  const searchExistingListing = async function () {
    console.log(`searchExisting listing is working`);
    const result = await ListingModel.find({
      title: body.title,
      owner: body.owner,
    }).exec();
    console.log(result);

    if (result.length < 1) {
      saveListing();
    } else {
      res.status(`500`).send({
        response: `This listing is already registered. Thank you for using far`,
      });
    }
  };
  searchExistingListing();
  function saveListing() {
    console.log(`save Listing working `);
    newListing.save((err, Listing) => {
      if (err) {
        const errors = err.errors;

        res.status(`422`).send(errors);
        return;
      } else next();
    });
  }
};
module.exports = saveListing;

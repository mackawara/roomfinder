const saveListing = require("../models/listings");
const ListingModel = require("../models/listings");

(exports.getListings = async (req, res) => {
  console.log(req.user);
  try {
    const listings = await ListingModel.find();
    console.log(listings);
    res.render("listings/listings.ejs", { listings: listings });
  } catch (err) {
    console.log(err);
  }
}),
  (exports.getAddListings = async (req, res) => {
    console.log(" req receieved");
    res.render("listings/addListing.ejs");
  }),
  (exports.addListing = async (req, res, next) => {
    const body = req.body;
    console.log(req.body.rooms);
    console.log(req.body.location);
    // console.log(req.body.description);
    console.log(req.body.city);

    const newListing = new ListingModel({
      location: body.location,
      range: body.range,
      rooms: body.rooms,
      description: body.description,
      city: body.city,
      range: body.range,
      /* location: body.description,
      fullAddress: body.fullAddress,
      pic1: body.fullAddress,
      pic2: body.pic2,
      gps: body.gps, */
    });

    const searchExistingListing = async function () {
      console.log(`searchExisting listing is working`);
      const result = await ListingModel.find({
        description: body.description,
        location: body.location,
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
        } else res.status(200).send("successfully");
      });
    }
  }),
  (exports.searchListings = async (req, res) => {
    const listings =await ListingModel.find({
      location: req.body.location,
      city: req.body.city,
    });
    console.log(listings)
    console.log(req.body.location, req.body.city)
    res.render("listings/listings.ejs", { listings: listings });
  }),
  (exports.getSearchListings = async (req, res) => {
    res.render("listings/search.ejs");
  });

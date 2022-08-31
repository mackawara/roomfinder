const saveListing = require("../models/listings");
exports.getListings = async (req, res) => {
    res.render("listings.ejs");
  },
  exports.getAddListings = async (req, res) => {
    console.log(" req receieved")
    res.render("addListing.ejs");
  },
  exports.addListing= async (req, res) => {
    console.log(" saveed to DB successfuly");
    res.status("200").send(req.body.owner);
  },
 exports.searchListings= async (req, res) => {
    res.render("searchListing.ejs");
  }


const express = require("express");
const router = express.Router();
const listingsController = require("../controllers/listings");
const saveListing = require("../models/listings");

//router.get('/', homeController.getHome)
//router.get("/listings", homeController.getListings);
router.get(`/add`, listingsController.getAddListings);
router.post(`/add`, saveListing, listingsController.addListing);
module.exports = router;

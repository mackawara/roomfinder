const express = require("express");
const router = express.Router();
const listingsController = require("../controllers/listings");
const saveListing = require("../models/listings");

//router.get('/', homeController.getHome)
router.get("/", listingsController.getListings);
router.get(`/add`, listingsController.getAddListings);
router.post(`/add`, listingsController.addListing);
router.get(`/search`, listingsController.getSearchListings);
router.post(`/search`, listingsController.searchListings);
module.exports = router;

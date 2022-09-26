const express = require("express");
const router = express.Router();
const listingsController = require("../controllers/listings");
const saveListing = require("../models/listings");
const upload = require("../middleware/multer");

//router.get('/', homeController.getHome)
router.get("/", listingsController.getListings);
router.get(`/add`, listingsController.getAddListings);
router.post(`/add`, upload.single("file"), listingsController.addListing);
router.get(`/search`, listingsController.getSearchListings);
router.post(`/search`, listingsController.searchListings);
module.exports = router;
